<?php
/**
 * Created by PhpStorm.
 * User: shenyang
 * Date: 2018/11/15
 * Time: 4:04 PM
 */

namespace app\frontend\modules\deduction;

use app\common\exceptions\MinOrderDeductionNotEnough;
use app\framework\Database\Eloquent\Collection;
use app\frontend\models\order\PreOrderDeduction;
use app\frontend\models\order\PreOrderDiscount;
use app\frontend\modules\deduction\models\Deduction;
use app\frontend\modules\deduction\orderGoods\PreOrderGoodsDeduction;
use app\frontend\modules\order\models\PreOrder;

class OrderDeductionCollection extends Collection
{
    public function minAmount()
    {
        return $this->where('checked', 1)->sum(function (PreOrderDeduction $orderDeduction) {
            return $orderDeduction->getMinDeduction()->getMoney();
        });
    }

    public function usedAmount()
    {
        return $this->where('checked', 1)->sum('amount');
    }

    /**
     * 过滤掉不可抵扣的
     * @return $this
     */
    public function filterNotDeductible()
    {
        $this->items = $this->filter(function (PreOrderDeduction $orderDeduction) {
            return $orderDeduction->deductible();
        })->all();
        return $this;
    }

    public function toArray()
    {
        $this->filterNotDeductible();
        return parent::toArray(); // TODO: Change the autogenerated stub
    }

    public function lock()
    {
        $this->each(function (PreOrderDeduction $orderDeduction) {
            return $orderDeduction->lock();
        });
        return $this;
    }

    /**
     * 按照必选排序
     * @return $this
     */
    public function sortOrderDeductionCollection()
    {
        // 按照选中状态排序
        $this->items = $this->sortByDesc(function (PreOrderDeduction $preOrderDeduction) {
            return $preOrderDeduction->mustBeChecked();
        })->all();
        return $this;
    }

    /**
     * @param mixed $value
     * @return $this
     */
    public function push($value)
    {
        parent::push($value);
        sort($this->items);
        return $this;
    }

    /**
     * @return $this
     */
    public function validate()
    {
        $this->each(function (PreOrderDeduction $orderDeduction) {
            $orderDeduction->validateCoin();
        });

        return $this;
    }

}