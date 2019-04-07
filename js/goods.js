$(function () {
    $('#addGoods').click(function () {
        /*
             goodsnum 商品编号
             goodsname 商品名称
             goodsintro 商品描述
             price      商品价格 
             express    配送方式
             store      厂家
             repertory  库存
        */
        let goodsnum = $('#goodsnum').val();
        let goodsname = $('#goodsname').val();
        let goodsintro = $('#goodsintro').val();
        let price = $('#price').val();
        let express = $('#express').val();
        let store = $('#store').val();
        let repertory = $('#repertory').val();

        // let data = new FormData();
        if (goodsnum && goodsname && price && express && store && repertory) {
            $.ajax({
                type: 'post',
                url: '/goods',
                data: {
                    m: 'insert',
                    table: 'goods',
                    goodsnum,
                    goodsname,
                    goodsintro,
                    price,
                    express,
                    store,
                    repertory
                },
                success: function (str) {
                    alert(str);
                }
            })
        } else {
            alert('添加失败');
        }


        // 点击添加商品
        //测试上传图片
        // let weij = $('#upload').prop('files');
        // for (var i = 0; i < weij.length; i++) {
        //     data.append('goods', weij[i]);
        // }

        // $.ajax({
        //     type: 'post',
        //     url: '/upload',
        //     processData: false,
        //     contentType: 'multipart/form-data;',

        //     data: data,
        //     success: function (str) {
        //         console.log(str);
        //     }
        // })


    });

    $.ajax({
        type: 'post',
        url: '/goods',
        data: {
            m: 'findRestrict',
            table: 'goods',
            query: '',
            page: 1,
            num: 10
        },
        success: function (str) {
            let html = str.map(function (item) {
                return `<tr>
                    <td>
                        <div class="layui-unselect layui-form-checkbox" lay-skin="primary" data-id='${item.goodsnum}'>
                            <i class="layui-icon">&#xe605;</i>
                        </div>
                    </td>
                    <td>${item.goodsnum}</td>
                    <td>${item.goodsname}</td>
                    <td>${item.goodsintro}</td>
                    <td>${item.price}</td>
                    <td>${item.express}</td>
                    <td>${item.store}</td>
                    <td>${item.repertory}</td>
                    <td class="td-manage">
                        <a title="查看" onclick="x_admin_show('编辑','order-view.html')" href="javascript:;">
                            <i class="layui-icon">&#xe63c;</i>
                        </a>
                        <a title="删除" onclick="member_del(this,'${item.goodsnum}')" href="javascript:;">
                            <i class="layui-icon">&#xe640;</i>
                        </a>
                    </td>
                </tr>`
            }).join('');
            $('#goods_table tbody').html(html);
        }
    })

});