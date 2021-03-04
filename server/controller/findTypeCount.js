
module.exports = (req,res) => {
    

    // let sql = "SELECT COUNT(`t`.`type_id`) AS `count` FROM `type` AS `t` INNER JOIN `usertype` as `ut` ON `ut`.`type_id` = `t`.`type_id` AND `t`.`remove` = 0 AND `ut`.`user_id` = :userId;";
    // api.queryData(sql,'SELECT',{
    //     userId:req.userId
    // }).then(result => {
    //     console.log(result);
    //     res.send({msg:'查询商品类型数量成功',data:result,status:1110});
    // }).catch(err => {
    //     res.send({msg:'查询商品类型数量失败',status:1111});
    // })


    let params = {
        userId:req.userId,
    }

    let sql = "SELECT COUNT(`t`.`type_id`) AS count FROM `type` AS `t` INNER JOIN `usertype` as `ut` ON `ut`.`type_id` = `t`.`type_id` AND `ut`.`user_id` = :userId AND `t`.`remove` = 0 ";

    //判断是否存在类型名称查询
    if(req.query.name){
        sql += " AND `t`.`name` LIKE '%" + req.query.name + "%'";
    }
    //是否存在状态
    if(req.query.status){
        params.status = req.query.status;
        sql += " AND `t`.`status` = :status";
    }
    //是否存在日期
    if(req.query.createdAt){
        params.start = `${req.query.createdAt} 00:00:00`;
        params.end = `${req.query.createdAt} 23:59:59`;
        sql += " created_at` >= :start AND `t`.`created_at` <= :end"
    }
    api.queryData(sql,'SELECT',params).then(result => {
        res.send({msg:'查询商品类型数量成功',data:result,status:1110});
    }).catch(err => {
        res.send({msg:'查询商品类型数量失败',status:1111});
    })
}

