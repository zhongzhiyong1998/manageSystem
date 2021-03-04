


//查询商品总数量
module.exports = (req,res) => {
    let params = {
        userId:req.userId,
    }

    // let sql = "SELECT COUNT(`p`.`pro_id`) AS `count` FROM `product` AS `p` INNER JOIN `producttype` AS `pt` ON `p`.`pro_id`	= `pt`.`pro_id` INNER JOIN `type` AS `t` ON `t`.`type_id` = `pt`.`type_id` INNER JOIN `userproduct` AS `up` ON `up`.`pro_id` = `p`.`pro_id` AND `p`.`remove` = 0 AND `t`.`remove` = 0 AND `up`.`user_id` = 'u_1614148427087'; AND `p`.`name` LIKE '%虾%' AND `p`.`status` = 0 AND `pt`.`type_id` = 't_1614303088713' AND `p`.`created_at` >= '2021-02-25 23:00:00' AND `p`.`created_at` <= '2021-02-25 23:59:59' ORDER BY `t`.`created_at` DESC LIMIT 0,2";
    let sql = "SELECT COUNT(`p`.`pro_id`) AS `count` FROM `product` AS `p` INNER JOIN `producttype` AS `pt` ON `p`.`pro_id`	= `pt`.`pro_id` INNER JOIN `type` AS `t` ON `t`.`type_id` = `pt`.`type_id` INNER JOIN `userproduct` AS `up` ON `up`.`pro_id` = `p`.`pro_id` AND `p`.`remove` = 0 AND `t`.`remove` = 0 AND `up`.`user_id` = :userId";

    //判断是否存在商品名称查询
    if(req.query.name){
        sql += " AND `p`.`name` LIKE '%" + req.query.name + "%'";
    }
    //判断是否存在类型查询
    if(req.query.typeId){
        params.typeId = req.query.typeId;

        sql += " AND `pt`.`type_id` = :typeId";
    }
    //是否存在状态
    if(req.query.status){
        params.status = req.query.status;
        sql += " AND `p`.`status` = :status";
    }
    //是否存在日期
    if(req.query.createdAt){
        params.start = `${req.query.createdAt} 00:00:00`;
        params.end = `${req.query.createdAt} 23:59:59`;
        sql += " AND `p`.created_at` >= :start AND `p`.`created_at` <= :end"
    }
    api.queryData(sql,'SELECT',params).then(result => {
        res.send({msg:'查询商品总数量成功',status:1190,data:result});
    }).catch(err => {
        res.send({msg:'查询商品总数量失败',status:1191});
    })

}



