// let { find, update, del, insert } = require('../api/db');
// console.log(find);
$(function () {
    $.ajax({
        type: 'post',
        url: '/order',
        data: {
            table: 'order',
            query: '',
            page: 1,
            num: 10
        },
        success: function (str) {
            let html = str.map((item) => {
                return `<tr>
                        <td>
                            <div class="layui-unselect layui-form-checkbox" lay-skin="primary" data-id='2'>
                            <i class="layui-icon">&#xe605;</i>
                            </div>
                        </td>
                        <td>${item.ordernum}</td>
                        <td>${item.consignee}</td>
                        <td>${item.goodsname}</td>
                        <td>${item.goodsnum}</td>
                        <td>${item.total_prices}</td>
                        <td>${item.order_status}</td>
                        <td>${item.shipping_status}</td>
                        <td>${item.pay_way}</td>
                        <td>${item.carriage}</td>
                        <td>${item.order_time}</td>
                        <td class="td-manage">
                            <a title="查看" onclick="x_admin_show('编辑','order-view.html')" href="javascript:;">
                            <i class="layui-icon">&#xe63c;</i>
                            </a>
                            <a title="删除" onclick="member_del(this,'要删除的id')" href="javascript:;">
                            <i class="layui-icon">&#xe640;</i>
                            </a>
                        </td>
                        </tr>`
            }).join('');
            $('#order_table tbody').html(html);
        }
    });
});