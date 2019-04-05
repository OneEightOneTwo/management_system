// let { find, update, del, insert } = require('../api/db');
// console.log(find);
$(function () {
    $.ajax({
        type: 'post',
        url: '/order',
        data: {
            m: 'findPortion',
            table: 'order',
            query: '',
            page: 1,
            num: 10
        },
        success: function (str) {
            // console.log(str);

            let html = str.map((item) => {
                return `<tr>
                        <td>
                            <div class="layui-unselect layui-form-checkbox" lay-skin="primary" data-id='${item.ordernum}'>
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
                            <a title="删除" onclick="member_del(this,${item.ordernum})" href="javascript:;">
                            <i class="layui-icon">&#xe640;</i>
                            </a>
                        </td>
                        </tr>`
            }).join('');
            $('#order_table tbody').html(html);
        }
    });

    $('#sreach1').click(function () {
        // let aaa = [{ 'aaaaa': 'aaaa' }, { 'aaaaa': 'aaaa' }, { 'aaaaa': 'aaaa' }];
        // console.log(aaa);
        // let arr = [];
        // let start = $('#start').val();
        // let end = $('#end').val();
        // let order_status = $('.order_status').val();
        // let pay_way = $('.pay_way').val();
        // let ordernum = $('#ordernum').val();
        // let shipping_status = $('.shipping_status').val();
        // if (start) {
        //     arr.push('start:' + start);
        // }
        // if (end) {
        //     arr.push('end:' + end);
        // }
        // if (order_status) {
        //     if (order_status != '订单状态') {
        //         arr.push('order_status:' + order_status);
        //     }
        // }
        // if (pay_way) {
        //     if (pay_way != '支付方式') {
        //         arr.push('pay_way:' + pay_way);
        //     }
        // }
        // if (ordernum) {
        //     arr.push('order_status:' + ordernum);
        // }
        // if (shipping_status) {
        //     if (shipping_status != '发货状态') {
        //         arr.push('shipping_status:' + shipping_status);
        //     }

        // }

        // if (arr.length < 0) {
        //     $.ajax({
        //         type: 'post',
        //         url: '/order',
        //         data: {
        //             m: 'find',
        //             table: 'order',
        //             query: arr,
        //         },
        //         success: function (str) {

        //             console.log(str);
        //         }
        //     });
        // }



    });

});