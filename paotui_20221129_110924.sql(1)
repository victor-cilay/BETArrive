-- MySQL dump 10.13  Distrib 5.6.50, for Linux (x86_64)
--
-- Host: localhost    Database: paotui
-- ------------------------------------------------------
-- Server version	5.6.50-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `gc_access`
--

DROP TABLE IF EXISTS `gc_access`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_access` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '分组ID',
  `purviewval` longtext COMMENT '分组对应权限值',
  `role_id` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `group_id` (`role_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3279 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_access`
--

LOCK TABLES `gc_access` WRITE;
/*!40000 ALTER TABLE `gc_access` DISABLE KEYS */;
INSERT INTO `gc_access` VALUES (3278,'admin/Reserve/view',22),(3277,'admin/Reserve/updateExt',22),(3276,'admin/Reserve/index',22),(3275,'admin/Reserve',22),(3274,'admin/Special/delete',22),(3273,'admin/Special/update',22),(3272,'admin/Special/add',22),(3271,'admin/Special/updateExt',22),(3270,'admin/Special/index',22),(3269,'admin/Special',22),(3268,'admin/Ticket/delete',22),(3267,'admin/Ticket/update',22),(3266,'admin/Ticket/add',22),(3265,'admin/Ticket/updateExt',22),(3264,'admin/Ticket/index',22),(3263,'admin/Ticket',22),(3262,'admin/Slide/view',22),(3261,'admin/Slide/delete',22),(3260,'admin/Slide/update',22),(3259,'admin/Slide/add',22),(3258,'admin/Slide/updateExt',22),(3257,'admin/Slide/index',22),(3256,'admin/Slide',22),(3255,'admin/Notice/view',22),(3254,'admin/Notice/delete',22),(3253,'admin/Notice/update',22),(3252,'admin/Notice/add',22),(3251,'admin/Notice/updateExt',22),(3250,'admin/Notice/index',22),(3249,'admin/Notice',22),(3248,'admin/TicketConfig/view',22),(3245,'admin/TicketConfig',22),(3246,'admin/TicketConfig/index',22),(3247,'admin/TicketConfig/update',22),(3244,'admin/Member/updateExt',22),(3243,'admin/Member/index',22),(3242,'admin/Member',22),(3241,'admin/Base/password',22),(3240,'admin/Index/main',22);
/*!40000 ALTER TABLE `gc_access` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_account`
--

DROP TABLE IF EXISTS `gc_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_account` (
  `wxapp_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `account` varchar(250) DEFAULT NULL COMMENT '登录账号',
  `pwd` varchar(250) DEFAULT NULL COMMENT '登录密码',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`wxapp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_account`
--

LOCK TABLES `gc_account` WRITE;
/*!40000 ALTER TABLE `gc_account` DISABLE KEYS */;
INSERT INTO `gc_account` VALUES (6,'admin','de5a04c19b7959864497421f94054cbc',0);
/*!40000 ALTER TABLE `gc_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_action`
--

DROP TABLE IF EXISTS `gc_action`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_action` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `menu_id` int(11) NOT NULL COMMENT '模块ID',
  `name` varchar(255) DEFAULT NULL COMMENT '动作名称',
  `action_name` varchar(128) NOT NULL COMMENT '动作名称',
  `type` tinyint(4) NOT NULL,
  `icon` varchar(32) DEFAULT NULL COMMENT 'icon图标',
  `pagesize` varchar(5) DEFAULT '20' COMMENT '每页显示数据条数',
  `is_view` tinyint(4) DEFAULT '0' COMMENT '是否按钮',
  `button_status` tinyint(4) DEFAULT NULL COMMENT '按钮是否显示列表',
  `sql_query` mediumtext COMMENT 'sql数据源',
  `block_name` varchar(255) DEFAULT NULL COMMENT '注释',
  `remark` varchar(255) DEFAULT NULL COMMENT '打开页面尺寸',
  `fields` text COMMENT '操作的字段',
  `note` varchar(255) DEFAULT NULL COMMENT '备注',
  `lable_color` varchar(12) DEFAULT NULL COMMENT '按钮背景色',
  `relate_table` varchar(32) DEFAULT NULL COMMENT '关联表',
  `relate_field` varchar(32) DEFAULT NULL COMMENT '关联字段',
  `list_field` varchar(255) DEFAULT NULL COMMENT '查询的字段',
  `bs_icon` varchar(32) DEFAULT NULL COMMENT '按钮图标',
  `sortid` mediumint(9) DEFAULT '0' COMMENT '排序',
  `orderby` varchar(250) DEFAULT NULL COMMENT '配置排序',
  `default_orderby` varchar(50) DEFAULT NULL COMMENT '默认排序',
  `tree_config` varchar(50) DEFAULT NULL,
  `jump` varchar(120) DEFAULT NULL COMMENT '按钮跳转地址',
  `is_controller_create` tinyint(4) DEFAULT '1' COMMENT '是否生成控制其方法',
  `is_service_create` tinyint(4) DEFAULT NULL COMMENT '是否生成服务层方法',
  `is_view_create` tinyint(4) DEFAULT NULL COMMENT '视图生成',
  `cache_time` mediumint(9) DEFAULT NULL COMMENT '缓存时间',
  `log_status` tinyint(4) DEFAULT NULL COMMENT '是否生成日志',
  `api_auth` tinyint(4) DEFAULT NULL COMMENT '接口是否鉴权',
  `sms_auth` tinyint(4) DEFAULT NULL COMMENT '短信验证',
  `captcha_auth` tinyint(4) DEFAULT NULL COMMENT '列表选中方式 1多选 2单选',
  `request_type` varchar(20) DEFAULT NULL COMMENT '请求类型',
  `do_condition` varchar(50) DEFAULT NULL COMMENT '操作条件',
  `select_type` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `menu_id` (`menu_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2935 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_action`
--

LOCK TABLES `gc_action` WRITE;
/*!40000 ALTER TABLE `gc_action` DISABLE KEYS */;
INSERT INTO `gc_action` VALUES (78,18,'首页数据列表','index',1,'','',0,0,'select a.*,group_concat(b.name) as role_name from pre_user as a left join pre_role as b on find_in_set(b.role_id,a.role_id)  group by a.user_id','','','','','primary','','','','',1,'','','','',1,1,1,NULL,NULL,NULL,NULL,0,NULL,'',2),(80,18,'添加','add',3,'','20',1,0,'','添加账户','800px|600px','name,user,pwd,role_id,note,status,create_time,avatar','','primary','','','','fa fa-plus',3,'','','','',1,1,1,NULL,NULL,NULL,NULL,0,NULL,'',NULL),(81,18,'修改','update',4,'','',1,1,'','修改账户','800px|550px','name,user,role_id,note,status,create_time,avatar','','success','','','','fa fa-edit',4,'','','','',1,1,1,NULL,NULL,NULL,NULL,0,NULL,'',NULL),(82,18,'修改密码','updatePassword',9,'','',1,0,'','修改密码','600px|300px','pwd','','warning','','','','',6,'','','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL),(85,19,'首页数据列表','index',1,'','',0,0,'','','600px|250px','','','primary','','','','',1,'','','pid,name','',1,1,1,NULL,NULL,NULL,NULL,0,NULL,'',1),(87,19,'添加','add',3,'','',1,0,'','添加分组','800px|400px','pid,name,status,description','','primary','','','','fa fa-plus',3,'','','','',1,1,1,NULL,NULL,NULL,NULL,0,NULL,'',NULL),(88,19,'修改','update',4,'','',1,1,'','修改分组','800px|400px','pid,name,status,description','','primary','','','','fa fa-edit',4,'','','','',1,1,1,NULL,NULL,NULL,NULL,0,NULL,'',NULL),(2131,19,'修改状态','updateExt',16,NULL,'',0,0,'','修改排序开关按钮操作','','',NULL,'primary','','','','',324,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,'',NULL),(2132,19,'设置权限','auth',11,NULL,'',1,1,'','弹窗连接','100%|100%','',NULL,'primary','','','','fa fa-plus',2131,NULL,'','','/Base/auth',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,'',2),(106,19,'查看用户','viewUser',11,'','',1,1,'','弹窗连接','100%|100%','status','','success','','','','fa fa-eye',8,'','','','/User/index',1,1,1,NULL,NULL,NULL,NULL,0,NULL,'',2),(324,19,'删除','delete',5,NULL,'',1,1,'','删除数据','','',NULL,'danger','','','','fa fa-trash',2132,'','','','',0,1,1,NULL,NULL,NULL,NULL,0,NULL,'',NULL),(462,18,'删除','delete',5,NULL,'',1,1,'','删除数据','','',NULL,'danger','','','','fa fa-trash',462,NULL,'','','',0,1,1,NULL,NULL,NULL,NULL,0,NULL,'',NULL),(2133,18,'修改状态','updateExt',16,NULL,'',0,0,'','修改排序开关按钮操作','','',NULL,'primary','','','','',2133,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,'',NULL),(2140,670,'首页数据列表','index',1,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2160,673,'删除','delete',5,NULL,'20',1,1,NULL,'删除','','',NULL,'danger',NULL,NULL,NULL,'fa fa-trash',2160,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2159,673,'修改','update',4,NULL,'20',1,1,NULL,'修改','800px|500px','title,upload_replace,thumb_status,thumb_width,thumb_height,thumb_type',NULL,'success',NULL,NULL,NULL,'fa fa-pencil',2159,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2144,670,'删除','delete',5,NULL,'20',1,1,NULL,'删除','','',NULL,'danger',NULL,NULL,NULL,'fa fa-trash',2144,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2145,670,'查看详情','view',15,NULL,'20',1,0,'','查看详情','800px|600px','application_name,username,url,ip,useragent,content,errmsg,type,create_time',NULL,'info','','','','fa fa-eye',2145,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2146,670,'导出','dumpData',12,NULL,'20',1,0,NULL,'导出','','',NULL,'warning',NULL,NULL,NULL,'fa fa-download',2146,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2158,673,'添加','add',3,NULL,'20',1,0,NULL,'添加','800px|500px','title,upload_replace,thumb_status,thumb_width,thumb_height,thumb_type',NULL,'primary',NULL,NULL,NULL,'fa fa-plus',2158,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2157,673,'修改排序开关按钮操作','updateExt',16,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2156,673,'首页数据列表','index',1,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2275,41,'首页方法','index',1,NULL,'',1,0,'','','','',NULL,'primary','','','','',2275,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2615,785,'修改','update',4,NULL,'20',1,1,'','修改','','wxapp_id,u_id,name,sex,phone,s_id,addres',NULL,'success','','','','fa fa-pencil',2616,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2568,770,'添加','add',3,NULL,'20',1,0,'','添加','800px|100%','wxapp_id,appid,appsecret,mch_id,mch_key,template_new,template_grab,template_cancel,template_store,template_comment,template_pay,user_month_fee,user_year_fee,store_week_fee,store_month_fee,xcx_logo,back_logo,vip_content,privacy_content,help_content,toast_content,user_vip_switch,company_pay_switch,take_all_switch,second_check_switch,article_check_switch,index_quanzi_switch,index_toast_switch,index_rank_switch,index_module_switch,index_history_switch,is_anonymous_switch,runner_auth_switch,refund_cert,refund_key,qu_tips,ji_tips,shi_tips,wan_tips,withdraw_tips,home_adv_type,home_adv_id,second_adv_type,second_adv_id,step_price,start_fee,withdraw_min,is_address_show,is_address_must,is_attach_show,is_attach_must,is_servicetime_show,is_servicenum_show,mp_appid,mp_secret,is_open_reward,posting_instructions,mp_template_new,mp_template_grab,mp_template_cancel,mp_template_store,mp_template_pay,mp_code',NULL,'primary','','','','fa fa-plus',2568,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2553,762,'删除','delete',5,NULL,'20',1,1,NULL,'删除','','',NULL,'danger',NULL,NULL,NULL,'fa fa-trash',2553,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2551,762,'添加','add',3,NULL,'20',1,0,NULL,'添加','800px|600px','name,create_time,img,s_id,wxapp_id,show_type,jump_type,url',NULL,'primary',NULL,NULL,NULL,'fa fa-plus',2551,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2552,762,'修改','update',4,NULL,'20',1,1,'','修改','800px|550px','name,wxapp_id,s_id,img,show_type,url_type,url',NULL,'success','','','','fa fa-pencil',2552,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2549,762,'首页数据列表','index',1,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2548,758,'删除','delete',5,NULL,'20',1,1,NULL,'删除','','',NULL,'danger',NULL,NULL,NULL,'fa fa-trash',2548,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2547,758,'修改','update',4,NULL,'20',1,1,'','修改','800px|450px','s_id,account,pwd,status,wxapp_id',NULL,'success','','','','fa fa-pencil',2547,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2786,823,'万能订单','universalOrder',3,NULL,'',0,NULL,'','创建数据','800px|550px','s_id,wxapp_id,qu_phone,qu_name,qu_sex,pay_time,cancel_reason',NULL,NULL,'','','',NULL,2786,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2566,770,'首页数据列表','index',1,NULL,'20',0,0,'','','','',NULL,'primary','','','','',1,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2565,769,'首页方法','index',1,NULL,'',1,0,'','','','',NULL,'primary','','','','',2275,NULL,'','','',1,1,1,NULL,1,NULL,NULL,NULL,NULL,NULL,2),(2571,772,'首页数据列表','index',1,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2850,764,'修改开关','updateExt',16,NULL,'',0,0,'','修改排序开关按钮操作','600px|350px','status',NULL,'primary','','','','',2850,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2434,729,'首页数据列表','index',1,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2435,729,'修改排序开关按钮操作','updateExt',16,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2436,729,'添加','add',3,NULL,'20',1,0,'','添加','900px|750px','title,img,notice',NULL,'primary','','','','fa fa-plus',2436,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2437,729,'修改','update',4,NULL,'20',1,1,'','修改','900px|750px','title,img,notice',NULL,'success','','','','fa fa-pencil',2437,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2438,729,'删除','delete',5,NULL,'20',1,1,NULL,'删除','','',NULL,'danger',NULL,NULL,NULL,'fa fa-trash',2438,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2449,733,'首页数据列表','index',1,NULL,'20',0,0,'','','','t_id',NULL,'primary','tickets','t_id','a.*,b.title','',1,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2450,733,'修改排序开关按钮操作','updateExt',16,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2451,733,'添加','add',3,NULL,'20',1,0,NULL,'添加','600px|450px','date,t_id,createtime',NULL,'primary',NULL,NULL,NULL,'fa fa-plus',2451,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2569,770,'修改','update',4,NULL,'20',1,1,'','修改','800px|100%','wxapp_id,appid,appsecret,mch_id,mch_key,template_new,template_grab,template_cancel,template_store,template_comment,template_pay,user_month_fee,user_year_fee,store_week_fee,store_month_fee,xcx_logo,back_logo,vip_content,privacy_content,help_content,toast_content,user_vip_switch,company_pay_switch,take_all_switch,second_check_switch,article_check_switch,index_quanzi_switch,index_toast_switch,index_rank_switch,index_module_switch,index_history_switch,is_anonymous_switch,runner_auth_switch,refund_cert,refund_key,qu_tips,ji_tips,shi_tips,wan_tips,withdraw_tips,home_adv_type,home_adv_id,second_adv_type,second_adv_id,step_price,start_fee,withdraw_min,is_address_show,is_address_must,is_attach_show,is_attach_must,is_servicetime_show,is_servicenum_show,mp_appid,mp_secret,is_open_reward,posting_instructions,mp_template_new,mp_template_grab,mp_template_cancel,mp_template_store,mp_template_pay,mp_code',NULL,'success','','','','fa fa-pencil',2569,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2535,752,'修改','update',4,NULL,'20',1,1,'','修改','600px|400px','account,pwd',NULL,'success','','','','fa fa-pencil',2535,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2534,752,'添加','add',3,NULL,'20',1,0,'','添加','600px|450px','account,pwd,create_time',NULL,'primary','','','','fa fa-plus',2534,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2532,752,'首页数据列表','index',1,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2556,764,'首页数据列表','index',1,NULL,'20',0,0,'','','','',NULL,'primary','','','','',1,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2546,758,'添加','add',3,NULL,'20',1,0,NULL,'添加','800px|500px','status,pwd,s_id,account,create_time,wxapp_id',NULL,'primary',NULL,NULL,NULL,'fa fa-plus',2546,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2526,747,'删除','delete',31,NULL,'20',1,1,'','删除','','',NULL,'danger','','','','fa fa-trash',2526,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2623,787,'用户领取优惠券','add',3,NULL,'',0,NULL,'','创建数据','','o_id,u_id,s_id,wxapp_id,use_status,create_time,update_time',NULL,NULL,'','','',NULL,2624,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2754,822,'修改','update',4,NULL,'20',1,1,'','编辑数据','','t_sex,auth_sid,t_name,phone',NULL,'success','','','','fa fa-edit',2586,NULL,'','','',1,1,1,0,1,1,0,0,'post',NULL,2),(2618,785,'我的地址列表','index',1,NULL,'',0,NULL,'','','','',NULL,NULL,'','','',NULL,2614,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2672,801,'首页数据列表','index',1,NULL,'20',0,NULL,'','','','',NULL,NULL,'','','',NULL,1,NULL,'','',NULL,1,1,NULL,0,1,0,0,0,'post',NULL,NULL),(2609,782,'学校列表','index',1,NULL,'20',0,NULL,'','','','',NULL,NULL,'','','',NULL,1,NULL,'','',NULL,1,1,NULL,0,1,0,0,0,'post',NULL,NULL),(2559,764,'修改','update',4,NULL,'20',1,1,'','修改','800px|400px','wxapp_id,c_name,price,status',NULL,'success','','','','fa fa-pencil',2559,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2558,764,'添加','add',3,NULL,'20',1,0,NULL,'添加','800px|450px','create_time,price,c_name,wxapp_id,status',NULL,'primary',NULL,NULL,NULL,'fa fa-plus',2558,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2514,747,'订单详情','view',15,NULL,'20',1,0,'','查看详情','','order_no,code,date,uid,time,status,createtime,num,t_id,list',NULL,'info','','','','fa fa-eye',2504,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2617,785,'地址详情','view',15,NULL,'20',1,0,'','查看详情','','wxapp_id,u_id,name,sex,phone,s_id,addres,create_time',NULL,'info','','','','fa fa-eye',2618,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2512,747,'我的订单列表','index',1,NULL,'20',0,NULL,'','','','',NULL,NULL,'','','',NULL,1,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2510,747,'提交预约信息','add',3,NULL,'20',1,0,'','添加','','order_no,code,date,uid,time,status,createtime,num,t_id,list',NULL,'primary','','','','fa fa-plus',2501,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2544,758,'首页数据列表','index',1,NULL,'20',0,0,'','','','s_id',NULL,'primary','school','s_id','a.*,b.s_name','',1,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2543,757,'删除','delete',5,NULL,'20',1,1,NULL,'删除','','',NULL,'danger',NULL,NULL,NULL,'fa fa-trash',2543,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2542,757,'修改','update',4,NULL,'20',1,1,'','修改','800px|100%','s_name,plat_rate,school_rate,second_rate,edit_status,robot_key,step,coupon_list,reward_rate',NULL,'success','','','','fa fa-pencil',2542,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2541,757,'添加','add',3,NULL,'20',1,0,'','添加','800px|100%','wxapp_id,s_name,plat_rate,school_rate,second_rate,edit_status,robot_key,step,create_time,coupon_list,reward_rate',NULL,'primary','','','','fa fa-plus',2541,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2539,757,'首页数据列表','index',1,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2640,789,'添加','add',3,NULL,'20',1,0,'','添加','800px|450px','s_id,wxapp_id,title,address,create_time',NULL,'primary','','','','fa fa-plus',2640,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2644,792,'首页数据列表','index',1,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2574,772,'修改','update',4,NULL,'20',1,1,'','修改','600px|350px','status',NULL,'success','','','','fa fa-pencil',2574,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2577,775,'首页数据列表','index',1,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2579,775,'添加','add',3,NULL,'20',1,0,NULL,'添加','800px|100%','wxapp_id,oss_status,oss_default_type,ali_oss_accesskeyid,ali_oss_accesskeysecret,ali_oss_endpoint,ali_oss_bucket,qny_oss_accesskey,qny_oss_secretkey,qny_oss_bucket,qny_oss_domain,create_time',NULL,'primary',NULL,NULL,NULL,'fa fa-plus',2579,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2580,775,'修改','update',4,NULL,'20',1,1,NULL,'修改','800px|100%','wxapp_id,oss_status,oss_default_type,ali_oss_accesskeyid,ali_oss_accesskeysecret,ali_oss_endpoint,ali_oss_bucket,qny_oss_accesskey,qny_oss_secretkey,qny_oss_bucket,qny_oss_domain,create_time',NULL,'success',NULL,NULL,NULL,'fa fa-pencil',2580,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2583,776,'首页数据列表','index',1,NULL,'20',0,0,'','','','s_id',NULL,'primary','school','s_id','a.*,b.s_name','',1,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2582,775,'修改开关','updateExt',16,NULL,'',0,0,'','修改排序开关按钮操作','600px|300px','',NULL,'primary','','','','',2582,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2584,776,'修改排序开关按钮操作','updateExt',6,NULL,'20',0,0,'','修改状态','600px|400px','is_runner,run_status',NULL,'primary','','','','fa fa-pencil',2,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2755,822,'查看详情','view',15,NULL,'20',1,0,'','查看详情','','wxapp_id,openid,nickname,avatar,balance,s_id,run_status,t_sex,auth_sid,deadtime,t_name,phone,create_time',NULL,'info','','','','fa fa-eye',2588,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2586,776,'修改','update',4,NULL,'20',1,1,'','编辑数据','800px|400px','run_status,t_sex,auth_sid,phone',NULL,'success','','','','fa fa-edit',2586,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2867,847,'点赞或取消点赞','giveUp',3,NULL,'',0,NULL,'','创建数据','','',NULL,NULL,'','','',NULL,2867,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2757,823,'取快递下单','takeExpressOrder',3,NULL,'',0,NULL,'','创建数据','800px|100%','s_id,wxapp_id,img,remarks,sex_limit,weight,express_num,sh_addres,qu_addres,co_id,out_time,qu_phone,qu_name,qu_sex,pay_time,cancel_reason',NULL,NULL,'','','',NULL,2757,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2863,828,'查看详情','view',15,NULL,'20',1,0,'','查看详情','800px|100%','',NULL,'info','','','','fa fa-eye',2863,NULL,'','',NULL,1,1,NULL,0,1,0,0,0,'post',NULL,NULL),(2624,787,'可使用优惠券列表','index',1,NULL,'',0,NULL,'','','','',NULL,NULL,'','','',NULL,2623,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2791,832,'修改排序开关按钮操作','updateExt',6,NULL,'20',0,0,'','修改状态','600px|400px','is_runner,run_status',NULL,'primary','','','','fa fa-pencil',2,NULL,'','','',1,1,1,NULL,1,NULL,NULL,NULL,NULL,NULL,2),(2790,832,'首页数据列表','index',1,NULL,'20',0,0,'','','','s_id',NULL,'primary','school','s_id','a.*,b.s_name','',1,NULL,'','','',1,1,1,NULL,1,NULL,NULL,NULL,NULL,NULL,2),(2594,779,'首页数据列表','index',1,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2595,779,'修改排序开关按钮操作','updateExt',16,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2596,779,'添加','add',3,NULL,'20',1,0,'','添加','800px|100%','wxapp_id,sms_status,sms_type,ali_sms_accesskeyid,ali_sms_accesskeysecret,ali_sms_signname,ali_sms_tempcode,cl_account,cl_pwd,cl_sign,create_time',NULL,'primary','','','','fa fa-plus',2596,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2597,779,'修改','update',4,NULL,'20',1,1,'','修改','800px|100%','wxapp_id,sms_status,sms_type,ali_sms_accesskeyid,ali_sms_accesskeysecret,ali_sms_signname,ali_sms_tempcode,cl_account,cl_pwd,cl_sign',NULL,'success','','','','fa fa-pencil',2597,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2616,785,'删除','delete',5,NULL,'20',1,1,'','删除','','',NULL,'danger','','','','fa fa-trash',2617,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2614,785,'添加','add',3,NULL,'20',1,0,'','添加','','wxapp_id,u_id,name,sex,phone,s_id,addres,create_time',NULL,'primary','','','','fa fa-plus',2615,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2626,790,'首页数据列表','index',1,NULL,'20',0,NULL,'','','','',NULL,NULL,'','','',NULL,1,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2627,790,'添加','add',3,NULL,'20',1,0,'','添加','','wxapp_id,u_id,account,name,price,type,status,create_time,update_time',NULL,'primary','','','','fa fa-plus',2573,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2649,793,'首页数据列表','index',1,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2926,857,'修改排序开关按钮操作','updateExt',16,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2648,792,'删除','delete',5,NULL,'20',0,1,NULL,'删除','','',NULL,'danger',NULL,NULL,NULL,'fa fa-trash',2648,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2647,792,'修改','update',4,NULL,'20',0,1,'','修改','600px|400px','title,image',NULL,'success','','','','fa fa-pencil',2647,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2646,792,'添加','add',3,NULL,'20',1,0,'','添加','800px|450px','s_id,wxapp_id,title,image,create_time',NULL,'primary','','','','fa fa-plus',2646,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2642,789,'删除','delete',5,NULL,'20',1,1,NULL,'删除','','',NULL,'danger',NULL,NULL,NULL,'fa fa-trash',2642,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2636,789,'首页数据列表','index',1,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2637,789,'修改排序开关按钮操作','updateExt',16,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2645,792,'修改排序开关按钮操作','updateExt',16,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2641,789,'修改','update',4,NULL,'20',1,1,'','修改','800px|400px','s_id,wxapp_id,title,address',NULL,'success','','','','fa fa-pencil',2641,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2650,793,'修改排序开关按钮操作','updateExt',16,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2651,793,'添加','add',3,NULL,'20',1,0,'','添加','800px|100%','s_id,wxapp_id,image,title,pay,price,details,create_time,cid,uid,state,rotation,degree,stock,paystate,commission,examine',NULL,'primary','','','','fa fa-plus',2651,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2652,793,'修改','update',4,NULL,'20',0,1,'','修改','800px|500px','title,pay,details,state,degree,examine',NULL,'success','','','','fa fa-pencil',2652,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2653,793,'删除','delete',5,NULL,'20',0,1,NULL,'删除','','',NULL,'danger',NULL,NULL,NULL,'fa fa-trash',2653,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2921,854,'修改排序开关按钮操作','updateExt',16,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL),(2658,796,'首页数据列表','index',1,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2659,796,'修改排序开关按钮操作','updateExt',16,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2798,804,'查看列表','index',1,NULL,'',0,NULL,'','','','u_id',NULL,NULL,'wechat_user','u_id','a.*,b.nickname,b.avatar',NULL,2798,NULL,'','pid',NULL,1,1,NULL,0,1,0,0,0,'post',NULL,NULL),(2794,823,'个人订单列表','orderLst',1,NULL,'',0,NULL,'','','','',NULL,NULL,'','','',NULL,2794,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'get',NULL,NULL),(2795,833,'首页数据列表','index',1,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL),(2782,829,'首页数据列表','index',1,NULL,'20',0,0,'','','','s_id',NULL,'primary','school','s_id','a.*,b.s_name','',1,NULL,'','','',1,1,1,NULL,1,NULL,NULL,NULL,NULL,NULL,2),(2664,798,'首页数据列表','index',1,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2665,798,'修改排序开关按钮操作','updateExt',16,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2666,799,'首页数据列表','index',1,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2667,799,'修改排序开关按钮操作','updateExt',16,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2692,809,'添加','add',3,NULL,'20',1,0,'','添加','800px|400px','type_name,createtime,type_image,sort',NULL,'primary','','','','fa fa-plus',2692,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2693,809,'修改','update',4,NULL,'20',1,1,'','修改','800px|400px','type_name,createtime,type_image,sort',NULL,'success','','','','fa fa-pencil',2693,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2680,803,'首页数据列表','index',1,NULL,'20',0,NULL,NULL,NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL),(2799,804,'添加','add',3,NULL,'20',1,0,'','添加','800px|500px','s_id,wxapp_id,m_id,u_id,details,pid,create_time',NULL,'primary','','','','fa fa-plus',2799,NULL,'','',NULL,1,1,NULL,0,1,0,0,0,'post',NULL,NULL),(2682,805,'首页数据列表','index',1,NULL,'20',0,NULL,NULL,NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL),(2683,805,'修改','update',4,NULL,'20',1,1,NULL,'修改','','name,phone,create_time,uid,state,wxapp_id,s_id',NULL,'success',NULL,NULL,NULL,'fa fa-pencil',2662,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL),(2684,805,'删除','delete',5,NULL,'20',1,1,NULL,'删除','','',NULL,'danger',NULL,NULL,NULL,'fa fa-trash',2663,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL),(2669,800,'首页数据列表','index',1,NULL,'20',0,0,'','','','',NULL,'primary','','','','',1,NULL,'','','',1,1,1,NULL,1,NULL,NULL,NULL,NULL,NULL,2),(2671,800,'查看详情','view',15,NULL,'',0,NULL,'','','','',NULL,NULL,'','','',NULL,2671,NULL,'','',NULL,1,1,NULL,0,1,0,0,0,'post',NULL,NULL),(2696,811,'首页数据列表','index',1,NULL,'20',0,0,'','','','type_id',NULL,'primary','zh_business_type','type_id','a.*,b.type_name','',1,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2694,809,'删除','delete',5,NULL,'20',1,1,NULL,'删除','','',NULL,'danger',NULL,NULL,NULL,'fa fa-trash',2694,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2695,809,'查看详情','view',15,NULL,'20',1,0,'','查看详情','800px|400px','type_name,createtime,type_image,sort',NULL,'info','','','','fa fa-eye',2695,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2792,832,'修改','update',4,NULL,'20',1,1,'','编辑数据','600px|400px','run_status,auth_sid',NULL,'success','','','','fa fa-edit',2586,NULL,'','','',1,1,1,NULL,1,NULL,NULL,NULL,NULL,NULL,2),(2690,809,'首页数据列表','index',1,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2691,809,'修改排序开关按钮操作','updateExt',16,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2685,806,'首页数据列表','index',1,NULL,'20',0,NULL,NULL,NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL),(2741,798,'添加','add',3,NULL,'20',1,0,'','添加','800px|100%','title,image,types,start,ladder,create_time,s_id,wxapp_id,appid',NULL,'primary','','','','fa fa-plus',2741,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2781,823,'寄快递下单','sendExpressOrder',3,NULL,'',0,NULL,'','创建数据','800px|550px','s_id,wxapp_id,qu_phone,qu_name,qu_sex,pay_time,cancel_reason',NULL,NULL,'','','',NULL,2781,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2868,847,'转发数累加','forwardAccumulation',3,NULL,'',0,NULL,'','创建数据','','',NULL,NULL,'','','',NULL,2868,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2864,828,'首页查看全部','index',1,NULL,'',0,NULL,'','','','u_id',NULL,NULL,'wechat_user','u_id','a.*,b.nickname,b.avatar',NULL,2864,NULL,'','',NULL,1,1,NULL,0,1,0,0,0,'post',NULL,NULL),(2740,803,'详情','details',15,NULL,'',0,NULL,'','','','state,phone,name,other',NULL,NULL,'','','',NULL,2740,NULL,'','',NULL,1,1,NULL,0,1,0,0,0,'get',NULL,NULL),(2697,811,'修改排序开关按钮操作','updateExt',16,NULL,'20',0,0,'','','600px|350px','is_recommend',NULL,'primary','','','','',2,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2698,811,'添加','add',3,NULL,'20',1,0,'','添加','800px|100%','s_id,wxapp_id,wxadmin_name,type_id,start_time,end_time,business_name,business_address,phone,expire_time,business_image,status,type,createtime,is_recommend,starting_fee,longitude,latitude',NULL,'primary','','','','fa fa-plus',2698,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2699,811,'修改','update',4,NULL,'20',1,1,NULL,'修改','800px|100%','wxadmin_name,type_id,start_time,end_time,business_name,business_address,phone,expire_time,business_image,status,type,createtime,is_recommend,starting_fee,longitude,latitude',NULL,'success',NULL,NULL,NULL,'fa fa-pencil',2699,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2700,811,'删除','delete',5,NULL,'20',1,1,NULL,'删除','','',NULL,'danger',NULL,NULL,NULL,'fa fa-trash',2700,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2701,811,'查看详情','view',15,NULL,'20',1,0,'','查看详情','800px|100%','wxadmin_name,type_id,start_time,end_time,business_name,business_address,phone,expire_time,business_image,status,type,createtime,is_recommend,starting_fee,longitude,latitude',NULL,'info','zh_business_type','type_id','a.*,b.type_name','fa fa-eye',2701,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2702,812,'首页数据列表','index',1,NULL,'20',0,0,'','','','business_id',NULL,'primary','zh_business','business_id','a.*,b.business_name','',1,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2703,812,'修改排序开关按钮操作','updateExt',16,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2704,812,'添加','add',3,NULL,'20',1,0,NULL,'添加','800px|400px','business_id,goods_type_name,createtime,sort',NULL,'primary',NULL,NULL,NULL,'fa fa-plus',2704,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2705,812,'修改','update',4,NULL,'20',1,1,NULL,'修改','800px|400px','business_id,goods_type_name,createtime,sort',NULL,'success',NULL,NULL,NULL,'fa fa-pencil',2705,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2706,812,'删除','delete',5,NULL,'20',1,1,NULL,'删除','','',NULL,'danger',NULL,NULL,NULL,'fa fa-trash',2706,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2707,812,'查看详情','view',15,NULL,'20',1,0,'','查看详情','800px|400px','business_id,goods_type_name,createtime,sort',NULL,'info','zh_business','business_id','a.*,b.business_name','fa fa-eye',2707,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2708,813,'首页数据列表','index',1,NULL,'20',0,0,'select c.business_name,b.goods_type_name,a.* from gc_zh_goods a join gc_zh_business c on a.business_id=c.business_id join gc_zh_goods_type b on b.goods_type_id = a.goods_type_id','','','',NULL,'primary','','','','',1,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2709,813,'修改排序开关按钮操作','updateExt',16,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2710,813,'添加','add',3,NULL,'20',1,0,'','添加','800px|550px','goods_type_id,goods_name,price,goods_img,status,createtime,sort',NULL,'primary','','','','fa fa-plus',2710,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2711,813,'修改','update',4,NULL,'20',1,1,'','修改','800px|550px','goods_type_id,goods_name,price,goods_img,status,createtime,sort',NULL,'success','','','','fa fa-pencil',2711,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2712,813,'删除','delete',5,NULL,'20',1,1,NULL,'删除','','',NULL,'danger',NULL,NULL,NULL,'fa fa-trash',2712,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2714,815,'首页数据列表','index',1,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2715,815,'修改排序开关按钮操作','updateExt',16,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2716,815,'查看详情','view',15,NULL,'20',1,1,'','查看详情','800px|100%','title,address,type,media_type,createtime,phone,pick_date,claim_method,remarks,image,video',NULL,'info','','','','fa fa-eye',2716,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2717,816,'首页数据列表','index',1,NULL,'20',0,0,'','','','info_id',NULL,'primary','zh_info','info_id','a.*,b.title','',1,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2718,816,'修改排序开关按钮操作','updateExt',16,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2719,816,'删除','delete',5,NULL,'20',1,1,NULL,'删除','','',NULL,'danger',NULL,NULL,NULL,'fa fa-trash',2719,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2720,818,'首页数据列表','index',1,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2721,818,'修改排序开关按钮操作','updateExt',16,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2722,818,'添加','add',3,NULL,'20',1,0,'','添加','800px|100%','s_id,wxapp_id,sort,class_name,icon,img,createtime,is_recommend,url,is_cate',NULL,'primary','','','','fa fa-plus',2722,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2723,818,'修改','update',4,NULL,'20',1,1,NULL,'修改','800px|600px','class_name,createtime,sort,icon,img,is_recommend,url,is_cate',NULL,'success',NULL,NULL,NULL,'fa fa-pencil',2723,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2724,818,'删除','delete',5,NULL,'20',1,1,NULL,'删除','','',NULL,'danger',NULL,NULL,NULL,'fa fa-trash',2724,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2725,818,'查看详情','view',15,NULL,'20',1,0,NULL,'查看详情','800px|600px','class_name,createtime,sort,icon,img,is_recommend,url,is_cate',NULL,'info',NULL,NULL,NULL,'fa fa-eye',2725,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2726,819,'首页数据列表','index',1,NULL,'20',0,0,'','','','class_id',NULL,'primary','zh_forum_class','class_id','a.*,b.class_name','',1,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2727,819,'修改排序开关按钮操作','updateExt',16,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2871,848,'修改','update',4,NULL,'20',1,1,'','修改','','start_time,end_time,business_name,business_address,phone,business_image,status,type,createtime',NULL,'success','','','','fa fa-pencil',2699,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'get',NULL,NULL),(2730,819,'删除','delete',5,NULL,'20',1,1,NULL,'删除','','',NULL,'danger',NULL,NULL,NULL,'fa fa-trash',2730,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2731,819,'查看详情','view',15,NULL,'20',1,1,'','查看详情','800px|100%','class_id,content,media_type,status,createtime,image,video',NULL,'info','zh_forum_class','class_id','a.*,b.class_name','fa fa-eye',2731,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2732,820,'首页数据列表','index',1,NULL,'20',0,0,'','','','article_id',NULL,'primary','zh_articles','article_id','a.*,b.content','',1,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2733,820,'修改排序开关按钮操作','updateExt',16,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2848,844,'添加','add',3,NULL,'20',1,0,'','添加','600px|450px','article_id,contents,createtime',NULL,'primary','','','','fa fa-plus',2848,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2849,845,'首页数据列表','index',1,NULL,'20',0,0,'','','','',NULL,'primary','','','','',1,NULL,'','','',1,1,1,0,1,0,0,0,'get',NULL,2),(2865,840,'删除评论','delete',5,NULL,'',0,NULL,'','删除数据','','',NULL,NULL,'','','',NULL,2865,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'delete',NULL,NULL),(2739,807,'查询','index',1,NULL,'',0,NULL,'','','','s_id,wxapp_id,title,address',NULL,NULL,'','','',NULL,2739,NULL,'','',NULL,1,1,NULL,0,1,0,0,0,'get',NULL,NULL),(2742,798,'修改','update',4,NULL,'20',1,1,'','修改','800px|100%','title,image,types,start,ladder,create_time,s_id,wxapp_id,appid',NULL,'success','','','','fa fa-pencil',2742,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2743,798,'删除','delete',5,NULL,'20',1,1,NULL,'删除','','',NULL,'danger',NULL,NULL,NULL,'fa fa-trash',2743,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2744,798,'查看详情','view',15,NULL,'20',1,0,NULL,'查看详情','800px|100%','tltle,image,types,start,ladder,create_time,s_id,wxapp_id,appid',NULL,'info',NULL,NULL,NULL,'fa fa-eye',2744,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2745,782,'详情','view',15,NULL,'',0,NULL,'','','','',NULL,NULL,'','','',NULL,2745,NULL,'','',NULL,1,1,NULL,0,1,0,0,0,'post',NULL,NULL),(2747,803,'我的订单','lit',1,NULL,'',0,NULL,'','','','state,phone,name,other',NULL,NULL,'','','',NULL,2747,NULL,'','',NULL,1,1,NULL,0,1,0,0,0,'get',NULL,NULL),(2861,828,'修改','update',4,NULL,'20',1,1,NULL,'修改','800px|100%','u_id,cid,create_time,details,price,pay,s_id,wxapp_id,image,title,m_id,state',NULL,'success',NULL,NULL,NULL,'fa fa-pencil',2861,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2751,821,'首页数据列表','index',1,NULL,'20',0,NULL,'','','','',NULL,NULL,'','','',NULL,1,NULL,'','',NULL,1,1,NULL,0,1,0,0,0,'post',NULL,NULL),(2785,823,'帮买订单','helpBuyOrder',3,NULL,'',0,NULL,'','创建数据','800px|550px','s_id,wxapp_id,qu_phone,qu_name,qu_sex,pay_time,cancel_reason',NULL,NULL,'','','',NULL,2785,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2787,831,'首页数据列表','index',1,NULL,'20',0,0,'','','','auth_sid',NULL,'primary','school','s_id','a.*,b.s_name','',1,NULL,'','','',1,1,1,NULL,1,NULL,NULL,NULL,NULL,NULL,2),(2788,831,'修改排序开关按钮操作','updateExt',6,NULL,'20',0,0,'','修改状态','600px|400px','is_runner,run_status',NULL,'primary','','','','fa fa-pencil',2,NULL,'','','',1,1,1,NULL,1,NULL,NULL,NULL,NULL,NULL,2),(2789,831,'修改','update',4,NULL,'20',1,1,'','编辑数据','600px|400px','run_status',NULL,'success','','','','fa fa-edit',2586,NULL,'','','',1,1,1,NULL,1,NULL,NULL,NULL,NULL,NULL,2),(2796,833,'修改排序开关按钮操作','updateExt',16,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL),(2797,833,'查看详情','view',15,NULL,'20',1,1,'','查看详情','800px|100%','img,remarks,attach_file,sex_limit,weight,express_num,sh_name,sh_phone,sh_addres,service_num,y_money,total,t_money,s_money,fxs_money,food_money,createtime,good_details,refuse_reason,proof',NULL,'info','','','','fa fa-eye',2797,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2800,804,'删除','delete',5,NULL,'20',1,1,'','删除','','',NULL,'danger','','','','fa fa-trash',2800,NULL,'','',NULL,1,1,NULL,0,1,0,0,0,'post',NULL,NULL),(2801,834,'添加','add',3,NULL,'20',1,0,'','添加','800px|400px','u_id,m_id,s_id,wxapp_id',NULL,'primary','','','','fa fa-plus',2801,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2802,834,'删除','delete',5,NULL,'20',1,1,'','删除','','',NULL,'danger','','','','fa fa-trash',2802,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2803,803,'添加','add',3,NULL,'20',1,0,NULL,'添加','800px|450px','state,create_time,phone,name,other',NULL,'primary',NULL,NULL,NULL,'fa fa-plus',2803,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2804,835,'首页数据列表','index',1,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2805,835,'修改排序开关按钮操作','updateExt',16,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2816,836,'添加','add',3,NULL,'20',1,0,NULL,'添加','800px|400px','u_id,s_id,m_id,wxapp_id',NULL,'primary',NULL,NULL,NULL,'fa fa-plus',2816,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2815,834,'查看','index',1,NULL,'',0,NULL,'','','','m_id',NULL,NULL,'dmh_market_goods','m_id','a.m_id,b.title,b.image,b.create_time,b.pay',NULL,2815,NULL,'','',NULL,1,1,NULL,0,1,0,0,0,'',NULL,NULL),(2814,836,'删除','delete',5,NULL,'20',1,1,'','删除','','',NULL,'danger','','','','fa fa-trash',2814,NULL,'','',NULL,1,1,NULL,0,1,0,0,0,'post',NULL,NULL),(2810,836,'列表','index',1,NULL,'',0,NULL,'','','','m_id',NULL,NULL,'dmh_market_goods','m_id','a.m_id,b.title,b.image,b.create_time,b.pay',NULL,2810,NULL,'','',NULL,1,1,NULL,0,1,0,0,0,'get',NULL,NULL),(2860,828,'添加','add',3,NULL,'20',1,0,NULL,'添加','800px|100%','u_id,cid,create_time,details,price,pay,s_id,wxapp_id,image,title,m_id,state',NULL,'primary',NULL,NULL,NULL,'fa fa-plus',2860,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2823,838,'信息列表','getInformationList',1,NULL,'',0,NULL,'','','','title,address,type,media_type,createtime,phone,pick_date,claim_method,remarks',NULL,NULL,'','','',NULL,2823,NULL,'','',NULL,1,1,NULL,0,1,0,0,0,'get',NULL,NULL),(2818,838,'查看详情','detail',15,NULL,'20',1,0,'','查看详情','','title,address,type,media_type,createtime,phone,pick_date,claim_method,remarks',NULL,'info','','','','fa fa-eye',2716,NULL,'','',NULL,1,1,NULL,0,1,0,0,0,'get',NULL,NULL),(2819,838,'添加','add',3,NULL,'20',1,0,'','添加','','title,address,type,media_type,createtime,phone,pick_date,claim_method,remarks',NULL,'primary','','','','fa fa-plus',2737,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2827,840,'添加','add',3,NULL,'20',1,0,'','添加','','info_id,content,createtime',NULL,'primary','','','','fa fa-plus',2738,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2824,838,'查询我发布的信息','getMyInformationList',1,NULL,'',0,NULL,'','','','title,address,type,phone,pick_date,claim_method,remarks',NULL,NULL,'','','',NULL,2824,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'get',NULL,NULL),(2862,828,'删除','delete',5,NULL,'20',1,1,NULL,'删除','','',NULL,'danger',NULL,NULL,NULL,'fa fa-trash',2862,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2828,841,'首页数据列表','index',1,NULL,'20',0,NULL,'','','','',NULL,NULL,'','','',NULL,1,NULL,'','',NULL,1,1,NULL,0,1,0,0,0,'get',NULL,NULL),(2839,843,'首页数据列表','index',1,NULL,'20',0,0,'','','','class_id',NULL,'primary','','','','',1,NULL,'','','',1,1,1,0,1,0,0,0,'get',NULL,2),(2896,819,'修改','update',4,NULL,'20',1,1,'','修改','800px|100%','class_id,content,media_type,status,createtime,image,video',NULL,'success','','','','fa fa-pencil',2896,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2897,799,'查看详情','view',15,NULL,'20',1,1,'','查看详情','800px|100%','img,remarks,attach_file,sex_limit,weight,express_num,start_time,door_time,sh_name,sh_sex,sh_phone,sh_addres,service_num,qu_addres,store_id,total,t_money,y_money,s_money,fxs_money,store_money,food_money,createtime,good_details,refuse_reason,proof,title',NULL,'info','','','','fa fa-eye',2897,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2851,764,'删除','delete',5,NULL,'20',1,1,NULL,'删除','','',NULL,'danger',NULL,NULL,NULL,'fa fa-trash',2851,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2845,820,'删除','delete',5,NULL,'20',1,1,NULL,'删除','','',NULL,'danger',NULL,NULL,NULL,'fa fa-trash',2845,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2840,843,'添加','add',3,NULL,'20',1,0,'','添加','','class_id,openid,content,media_type,status,createtime,image',NULL,'primary','','','','fa fa-plus',2728,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2844,843,'查询我的文章','getMyArticle',1,NULL,'',0,NULL,'','','','class_id,openid,content,status,createtime,image',NULL,NULL,'','','',NULL,2844,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'get',NULL,NULL),(2843,843,'查看详情','view',15,NULL,'20',1,0,'','查看详情','','class_id,openid,content,media_type,status,createtime,image',NULL,'info','','','','fa fa-eye',2731,NULL,'','','',1,1,1,0,1,0,0,0,'get',NULL,2),(2856,846,'最新订单列表','getNewestOrderList',1,NULL,'',0,NULL,'','','','',NULL,NULL,'','','',NULL,2794,NULL,'','',NULL,1,1,NULL,0,1,0,0,0,'get',NULL,NULL),(2859,846,'历史订单列表','getHistoryOrderList',1,NULL,'',0,NULL,'','','','',NULL,NULL,'','','',NULL,2859,NULL,'','',NULL,1,1,NULL,0,1,0,0,0,'get',NULL,NULL),(2886,848,'查看详情','view',15,NULL,'20',1,0,'','查看详情','800px|100%','wxadmin_name,type_id,start_time,end_time,business_name,business_address,phone,expire_time,business_image,status,type,createtime',NULL,'info','','','','fa fa-eye',2886,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'get',NULL,NULL),(2887,834,'查看详情','view',15,NULL,'20',1,0,NULL,'查看详情','800px|450px','m_id,u_id,create_time,s_id,wxapp_id',NULL,'info',NULL,NULL,NULL,'fa fa-eye',2887,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL),(2874,849,'首页数据列表','index',1,NULL,'20',0,0,'','','','business_id',NULL,'primary','zh_business','business_id','a.*,b.business_name','',1,NULL,'','','',1,1,1,0,1,1,0,0,'get',NULL,2),(2875,849,'添加','add',3,NULL,'20',1,0,'','添加','','business_id,goods_type_name,createtime',NULL,'primary','','','','fa fa-plus',2704,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2876,849,'修改','update',4,NULL,'20',1,1,'','修改','','business_id,goods_type_name,createtime',NULL,'success','','','','fa fa-pencil',2705,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2877,849,'删除','delete',5,NULL,'20',1,1,'','删除','','',NULL,'danger','','','','fa fa-trash',2706,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'delete',NULL,NULL),(2888,849,'查看详情','view',15,NULL,'20',1,0,'','查看详情','600px|450px','business_id,goods_type_name,createtime',NULL,'info','','','','fa fa-eye',2888,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'get',NULL,NULL),(2879,850,'首页数据列表','index',1,NULL,'20',0,0,'select c.business_name,b.goods_type_name,a.* from gc_zh_goods a join gc_zh_business c on a.business_id=c.business_id join gc_zh_goods_type b on b.goods_type_id = a.goods_type_id','','','',NULL,'primary','','','','',1,NULL,'','','',1,1,1,0,1,1,0,0,'get',NULL,2),(2880,850,'添加','add',3,NULL,'20',1,0,'','添加','','goods_type_id,business_id,goods_name,price,goods_img,status,createtime',NULL,'primary','','','','fa fa-plus',2710,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2881,850,'修改','update',4,NULL,'20',1,1,'','修改','','goods_type_id,business_id,goods_name,price,goods_img,status,createtime',NULL,'success','','','','fa fa-pencil',2711,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2889,850,'查看详情','view',15,NULL,'20',1,0,'','查看详情','800px|550px','goods_type_id,business_id,goods_name,price,goods_img,status,createtime',NULL,'info','','','','fa fa-eye',2889,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'get',NULL,NULL),(2884,850,'商品上架','goodShelves',3,NULL,'',0,NULL,'','创建数据','','status',NULL,NULL,'','','',NULL,2884,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2890,848,'商家订单列表','businessOrderList',1,NULL,'',0,NULL,'','','','',NULL,NULL,'','','',NULL,2890,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'get',NULL,NULL),(2895,851,'首页数据列表','index',1,NULL,'20',0,NULL,'','','','',NULL,NULL,'','','',NULL,1,NULL,'','',NULL,1,1,NULL,0,1,0,0,0,'get',NULL,NULL),(2898,833,'修改','update',4,NULL,'20',1,1,NULL,'修改','800px|100%','attach_file,id,s_id,wxapp_id,status,img,ordersn,goods_id,type,remarks,sex_limit,weight,express_num,start_time,door_time,start_openid,end_openid,sh_name,sh_sex,sh_phone,sh_school,sh_addres,service_num,qu_addres,co_id,co_name,guess_price,store_id,y_money,total,t_money,s_money,fxs_money,store_money,food_money,createtime,updatetime,out_time,cancel_time,out_time_num,good_details,cancel_from,refuse_reason,proof,is_refuse,title,is_start_show',NULL,'success',NULL,NULL,NULL,'fa fa-pencil',2898,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2900,796,'删除','delete',5,NULL,'20',1,1,NULL,'删除','','',NULL,'danger',NULL,NULL,NULL,'fa fa-trash',2900,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2899,799,'修改','update',4,NULL,'20',1,1,NULL,'修改','800px|100%','attach_file,s_id,wxapp_id,status,img,ordersn,type,remarks,sex_limit,weight,express_num,start_time,door_time,start_openid,end_openid,sh_name,sh_sex,sh_phone,sh_school,sh_addres,service_num,qu_addres,co_id,co_name,store_id,y_money,total,t_money,s_money,fxs_money,store_money,food_money,createtime,updatetime,out_time,cancel_time,out_time_num,good_details,cancel_from,refuse_reason,proof,is_refuse,title,is_start_show',NULL,'success',NULL,NULL,NULL,'fa fa-pencil',2899,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2912,795,'首页查看全部','index',1,NULL,'',0,0,'','','','',NULL,'primary','','','','',2912,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2924,855,'列表','index',1,NULL,'',0,NULL,'','','','',NULL,NULL,'','','',NULL,2924,NULL,'','',NULL,1,1,NULL,0,1,1,0,0,'post',NULL,NULL),(2925,857,'首页数据列表','index',1,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2920,854,'首页数据列表','index',1,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL),(2913,795,'修改','update',4,NULL,'20',0,1,'','修改','600px|400px','phone,name',NULL,'success','','','','fa fa-pencil',2913,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2914,795,'同意退款','delete',5,NULL,'20',1,1,'','删除','','',NULL,'danger','','','','fa fa-trash',2914,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2915,853,'首页数据列表','index',1,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2916,853,'修改排序开关按钮操作','updateExt',16,NULL,'20',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2918,853,'审批','update',4,NULL,'20',1,1,'','修改','800px|400px','state,pay,alipay_name,alipay_account',NULL,'success','','','','fa fa-pencil',2918,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2927,857,'添加','add',3,NULL,'20',1,0,NULL,'添加','800px|450px','price,day,wxapp_id,s_id,addtime',NULL,'primary',NULL,NULL,NULL,'fa fa-plus',2927,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2928,857,'修改','update',4,NULL,'20',1,1,'','修改','800px|400px','price,day,wxapp_id,s_id',NULL,'success','','','','fa fa-pencil',2928,NULL,'','','',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2),(2929,857,'删除','delete',5,NULL,'20',1,1,NULL,'删除','','',NULL,'danger',NULL,NULL,NULL,'fa fa-trash',2929,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2931,858,'首页数据列表','index',1,NULL,'20',0,NULL,'','','','',NULL,NULL,'','','',NULL,1,NULL,'','',NULL,1,1,NULL,0,1,0,0,0,'post',NULL,NULL);
/*!40000 ALTER TABLE `gc_action` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_address`
--

DROP TABLE IF EXISTS `gc_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_address` (
  `a_id` int(11) NOT NULL AUTO_INCREMENT,
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `u_id` varchar(250) DEFAULT NULL COMMENT '用户id',
  `name` varchar(250) DEFAULT NULL COMMENT '联系人姓名',
  `sex` smallint(6) DEFAULT NULL COMMENT '性别',
  `phone` varchar(250) DEFAULT NULL COMMENT '手机号',
  `s_id` smallint(6) DEFAULT NULL COMMENT '学校id',
  `addres` varchar(250) DEFAULT NULL COMMENT '详情地址',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`a_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_address`
--

LOCK TABLES `gc_address` WRITE;
/*!40000 ALTER TABLE `gc_address` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_application`
--

DROP TABLE IF EXISTS `gc_application`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_application` (
  `app_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) DEFAULT NULL,
  `app_dir` varchar(250) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `app_type` tinyint(4) DEFAULT NULL,
  `login_table` varchar(250) DEFAULT NULL,
  `login_fields` varchar(250) DEFAULT NULL,
  `domain` varchar(250) DEFAULT NULL,
  `pk` varchar(50) DEFAULT NULL COMMENT '登录表主键',
  PRIMARY KEY (`app_id`)
) ENGINE=MyISAM AUTO_INCREMENT=212 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_application`
--

LOCK TABLES `gc_application` WRITE;
/*!40000 ALTER TABLE `gc_application` DISABLE KEYS */;
INSERT INTO `gc_application` VALUES (1,'后台管理','gcadmin',1,1,'','','',NULL),(209,'api','api',1,2,'','','http://test.fkynet.net/api',''),(210,'子后台管理','accounts',1,1,'account','account|pwd','/accounts','id'),(211,'学校分后台','subschool',1,1,'school_account','account|pwd','/subschool','id');
/*!40000 ALTER TABLE `gc_application` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_article_pay`
--

DROP TABLE IF EXISTS `gc_article_pay`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_article_pay` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `wxapp_id` int(11) NOT NULL,
  `s_id` int(11) NOT NULL,
  `ordersn` varchar(255) NOT NULL COMMENT '订单号',
  `a_id` int(11) NOT NULL COMMENT '文章id',
  `uid` int(11) NOT NULL COMMENT '用户id',
  `price` decimal(10,2) NOT NULL,
  `day` int(11) NOT NULL DEFAULT '0' COMMENT '置顶天数，type为1时有值',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '0为未支付，1为已支付',
  `type` int(11) DEFAULT '1' COMMENT '1为置顶，2为打赏',
  `rate` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '抽成',
  `pay_time` varchar(255) DEFAULT NULL COMMENT '支付时间',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `pay_type` int(11) DEFAULT '0' COMMENT '0为微信支付，1为翼支付',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='文章支付表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_article_pay`
--

LOCK TABLES `gc_article_pay` WRITE;
/*!40000 ALTER TABLE `gc_article_pay` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_article_pay` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_business_account_log`
--

DROP TABLE IF EXISTS `gc_business_account_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_business_account_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `wxapp_id` int(11) NOT NULL COMMENT '平台id',
  `bus_id` int(11) NOT NULL COMMENT '商家id',
  `o_id` int(11) NOT NULL COMMENT '关联订单id',
  `type` int(11) NOT NULL DEFAULT '0' COMMENT '0为减，1为加',
  `number` int(11) NOT NULL COMMENT '金豆数量',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `s_id` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_business_account_log`
--

LOCK TABLES `gc_business_account_log` WRITE;
/*!40000 ALTER TABLE `gc_business_account_log` DISABLE KEYS */;
INSERT INTO `gc_business_account_log` VALUES (1,6,1,99999999,1,10000,'2022-06-19 07:10:24',0);
/*!40000 ALTER TABLE `gc_business_account_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_config`
--

DROP TABLE IF EXISTS `gc_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_config` (
  `name` varchar(50) NOT NULL,
  `data` varchar(255) NOT NULL,
  KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_config`
--

LOCK TABLES `gc_config` WRITE;
/*!40000 ALTER TABLE `gc_config` DISABLE KEYS */;
INSERT INTO `gc_config` VALUES ('water_status','0'),('site_title','跑腿SAAS管理系统'),('keyword','小程序开发,APP开发'),('description','校园跑腿SAAS管理系统'),('site_logo','https://xiaoyuan.lansu.net.cn/postom_logo.png'),('file_size','2'),('copyright','蓝速网络'),('file_type','gif,png,jpg,jpeg,doc,docx,xls,xlsx,csv,pdf,rar,zip,txt,mp4,flv,pem,pem'),('water_position','5'),('water_logo',''),('school_site_title','分校管理'),('sub_site_title','小程序管理'),('cert',''),('version','1.16'),('admin_login_bg','');
/*!40000 ALTER TABLE `gc_config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_coupon`
--

DROP TABLE IF EXISTS `gc_coupon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_coupon` (
  `o_id` int(11) NOT NULL AUTO_INCREMENT,
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `c_name` varchar(250) DEFAULT NULL COMMENT '优惠券名称',
  `price` varchar(250) DEFAULT NULL COMMENT '金额',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `status` tinyint(4) DEFAULT NULL COMMENT '状态',
  `type` smallint(6) DEFAULT '0' COMMENT '类型',
  `cut_num` decimal(10,2) DEFAULT '0.00' COMMENT '满减金额',
  PRIMARY KEY (`o_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_coupon`
--

LOCK TABLES `gc_coupon` WRITE;
/*!40000 ALTER TABLE `gc_coupon` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_coupon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_dates`
--

DROP TABLE IF EXISTS `gc_dates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_dates` (
  `d_id` int(11) NOT NULL AUTO_INCREMENT,
  `date` varchar(250) DEFAULT NULL COMMENT '日期',
  `t_id` smallint(6) DEFAULT NULL COMMENT '所属票务',
  `createtime` int(11) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`d_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_dates`
--

LOCK TABLES `gc_dates` WRITE;
/*!40000 ALTER TABLE `gc_dates` DISABLE KEYS */;
INSERT INTO `gc_dates` VALUES (7,'1635827474',1,1635827478),(8,'1635913896',1,1635827500),(9,'1636000303',1,1635827507);
/*!40000 ALTER TABLE `gc_dates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_dmh_article`
--

DROP TABLE IF EXISTS `gc_dmh_article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_dmh_article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(250) DEFAULT NULL COMMENT '标题',
  `content` text COMMENT '内容',
  `createtime` int(11) DEFAULT NULL COMMENT '创建时间',
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `s_id` varchar(250) DEFAULT NULL COMMENT '学校id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_dmh_article`
--

LOCK TABLES `gc_dmh_article` WRITE;
/*!40000 ALTER TABLE `gc_dmh_article` DISABLE KEYS */;
INSERT INTO `gc_dmh_article` VALUES (2,'代取下单操作','&lt;p&gt;第一次下单请看看这张图片哈，免得选错收不到快递哦，我们是下午五点统一取件，晚上八点统一开始配送，所以就不用担心有无人接单的问题，放假我们会在小程序首页发通知的哈，没有发就是在营业中呢。&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;https://cdn.lansu.net.cn/subschool/202209/202209171147130223088.png&quot; title=&quot;&quot; alt=&quot;202209171147130223088.png&quot;/&gt;&lt;/p&gt;',0,'6','14'),(3,'快递代寄教学','&lt;p&gt;我们是可以到楼下收件寄件的，各平台退货，个人行李寄件等都可以，发的是韵达和中通快递，不支持其他快递与到付哈，全国都可以寄，详细下单加客服微信就好啦。&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;https://cdn.lansu.net.cn/subschool/202211/202211050205010262356.jpg&quot; title=&quot;&quot; alt=&quot;202211050205010262356.jpg&quot;/&gt;&lt;/p&gt;',0,'6','14'),(4,'楼长招募','&lt;p&gt;目前需要招募楼长：&lt;/p&gt;&lt;p&gt;榕6、榕10、榕3、&lt;/p&gt;&lt;p&gt;梅1、2、3、4、5&lt;/p&gt;&lt;p&gt;桂3、2、1&lt;/p&gt;&lt;p&gt;松1、3&lt;/p&gt;&lt;p&gt;想要应聘的直接加客服微信哦&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;https://cdn.lansu.net.cn/subschool/202209/202209130031460282544.png&quot; title=&quot;&quot; alt=&quot;202209130031460282544.png&quot;/&gt;&lt;/p&gt;',0,'6','14'),(5,'催单退单','&lt;p&gt;对于代取订单有疑问，退单、催单等都是直接添加客服微信就好啦&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;https://cdn.lansu.net.cn/subschool/202211/202211050206390275137.jpg&quot; title=&quot;&quot; alt=&quot;202211050206390275137.jpg&quot;/&gt;&lt;/p&gt;',0,'6','14'),(6,'商务合作','&lt;p&gt;商务合作请添加微信&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;https://cdn.lansu.net.cn/subschool/202209/202209130033570262620.png&quot; title=&quot;&quot; alt=&quot;202209130033570262620.png&quot;/&gt;&lt;/p&gt;',1663000440,'6','14'),(7,'兼职客服','&lt;p&gt;&lt;img src=&quot;https://cdn.lansu.net.cn/subschool/202210/202210091123090275976.jpg&quot; title=&quot;&quot; alt=&quot;202210091123090275976.jpg&quot;/&gt;&lt;/p&gt;',0,'6','13'),(8,'福利客服','&lt;p&gt;&lt;img src=&quot;https://cdn.lansu.net.cn/subschool/202210/202210091130320283884.jpg&quot; title=&quot;&quot; alt=&quot;202210091130320283884.jpg&quot;/&gt;&lt;/p&gt;',1665286238,'6','13'),(9,'取件客服','&lt;p&gt;&lt;img src=&quot;https://cdn.lansu.net.cn/subschool/202210/202210102146250212358.jpg&quot; title=&quot;&quot; alt=&quot;202210102146250212358.jpg&quot;/&gt;&lt;/p&gt;',1665409588,'6','12'),(10,'福利群客服','&lt;p&gt;&lt;img src=&quot;https://cdn.lansu.net.cn/subschool/202210/202210102147020228817.jpg&quot; title=&quot;&quot; alt=&quot;202210102147020228817.jpg&quot;/&gt;&lt;/p&gt;',1665409631,'6','12'),(16,'代寄必读','&lt;p&gt;&lt;img src=&quot;https://cdn.lansu.net.cn/subschool/202211/202211030458000208615.jpeg&quot; title=&quot;&quot; alt=&quot;202211030458000208615.jpeg&quot;/&gt;&lt;/p&gt;',1667422682,'6','13'),(19,'查询取件码','&lt;p&gt;&lt;img src=&quot;https://cdn.lansu.net.cn/subschool/202211/202211030533580289142.jpeg&quot; title=&quot;&quot; alt=&quot;202211030533580289142.jpeg&quot;/&gt;&lt;/p&gt;',1667424841,'6','13'),(21,'公众号','&lt;p&gt;&lt;img src=&quot;https://cdn.lansu.net.cn/subschool/202211/202211050239490282820.jpg&quot; title=&quot;&quot; alt=&quot;202211050239490282820.jpg&quot;/&gt;&lt;/p&gt;',1667587192,'6','14'),(22,'商务合作','&lt;p&gt;&lt;img src=&quot;https://cdn.lansu.net.cn/subschool/202211/202211050241580224318.jpg&quot; title=&quot;&quot; alt=&quot;202211050241580224318.jpg&quot;/&gt;&lt;/p&gt;',1667587325,'6','14'),(24,'楼长微信','&lt;p&gt;&lt;img src=&quot;https://cdn.lansu.net.cn/subschool/202211/202211062139350233521.jpg&quot; style=&quot;&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;https://cdn.lansu.net.cn/subschool/202211/202211062139350257060.jpg&quot; style=&quot;&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;https://cdn.lansu.net.cn/subschool/202211/202211062139350251119.jpg&quot; style=&quot;&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;https://cdn.lansu.net.cn/subschool/202211/202211062139350280724.jpg&quot; style=&quot;&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;https://cdn.lansu.net.cn/subschool/202211/202211062139360202074.jpg&quot; style=&quot;&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;https://cdn.lansu.net.cn/subschool/202211/202211062139360212225.jpg&quot; style=&quot;&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;https://cdn.lansu.net.cn/subschool/202211/202211062139530233147.jpg&quot; style=&quot;&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;',1667742002,'6','13'),(27,'代拿时间','&lt;p&gt;&lt;img src=&quot;https://cdn.lansu.net.cn/subschool/202211/202211070034150274878.jpeg&quot; title=&quot;&quot; alt=&quot;202211070034150274878.jpeg&quot;/&gt;&lt;/p&gt;',0,'6','13'),(28,'代取必读','&lt;p&gt;&lt;img src=&quot;https://cdn.lansu.net.cn/subschool/202211/202211070036240230517.jpeg&quot; title=&quot;&quot; alt=&quot;202211070036240230517.jpeg&quot;/&gt;&lt;img src=&quot;https://cdn.lansu.net.cn/subschool/202211/202211070036280239127.jpeg&quot; title=&quot;&quot; alt=&quot;202211070036280239127.jpeg&quot;/&gt;&lt;/p&gt;',1667752590,'6','13');
/*!40000 ALTER TABLE `gc_dmh_article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_dmh_express`
--

DROP TABLE IF EXISTS `gc_dmh_express`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_dmh_express` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `s_id` varchar(250) DEFAULT NULL COMMENT '学校id',
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `title` varchar(250) DEFAULT NULL COMMENT '名称',
  `address` varchar(250) DEFAULT NULL COMMENT '地址',
  `create_time` int(11) DEFAULT NULL COMMENT '添加时间',
  `client_id` varchar(250) DEFAULT NULL COMMENT '易联云应用id',
  `client_secret` varchar(250) DEFAULT NULL COMMENT '易联云应用密钥',
  `machine_code` varchar(250) DEFAULT NULL COMMENT '机器码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8 COMMENT='快递站点';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_dmh_express`
--

LOCK TABLES `gc_dmh_express` WRITE;
/*!40000 ALTER TABLE `gc_dmh_express` DISABLE KEYS */;
INSERT INTO `gc_dmh_express` VALUES (16,'12','6','专科菜鸟驿站','',1654639977,NULL,NULL,NULL),(17,'12','6','本科菜鸟驿站','',1654639985,NULL,NULL,NULL),(18,'13','6','菜鸟驿站','',1654640808,NULL,NULL,NULL),(20,'14','6','京东快递','',1658062973,'1035891399','e98746daffe5ffed3f680f109537b94f','4004661227'),(21,'14','6','申通快递','',1658062984,'1035891399','e98746daffe5ffed3f680f109537b94f','4004661227'),(27,'14','6','顺丰快递','',1662379239,'1035891399','e98746daffe5ffed3f680f109537b94f','4004661227'),(28,'17','6','菜鸟驿站','广州华立学院江门校区',1663467356,'','',''),(29,'14','6','校内菜鸟驿站','',1667586120,'1035891399','e98746daffe5ffed3f680f109537b94f','4004661227'),(30,'14','6','校外优尚超市','',1667586144,'1035891399','e98746daffe5ffed3f680f109537b94f','4004661227'),(31,'14','6','校外南门牌坊','',1667586157,'1035891399','e98746daffe5ffed3f680f109537b94f','4004661227');
/*!40000 ALTER TABLE `gc_dmh_express` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_dmh_express_copy1`
--

DROP TABLE IF EXISTS `gc_dmh_express_copy1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_dmh_express_copy1` (
  `id` int(11) NOT NULL,
  `s_id` varchar(255) DEFAULT NULL COMMENT '学校id',
  `wxapp_id` varchar(255) DEFAULT NULL COMMENT '平台id',
  `title` varchar(255) DEFAULT NULL COMMENT '名称',
  `address` varchar(255) DEFAULT NULL COMMENT '地址',
  `create_time` varchar(255) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='快递点';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_dmh_express_copy1`
--

LOCK TABLES `gc_dmh_express_copy1` WRITE;
/*!40000 ALTER TABLE `gc_dmh_express_copy1` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_dmh_express_copy1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_dmh_footprint`
--

DROP TABLE IF EXISTS `gc_dmh_footprint`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_dmh_footprint` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `u_id` varchar(250) DEFAULT NULL COMMENT '用户id',
  `s_id` varchar(250) DEFAULT NULL COMMENT '学校id',
  `create_time` int(11) DEFAULT NULL COMMENT '添加时间',
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `m_id` varchar(250) DEFAULT NULL COMMENT '商品id',
  PRIMARY KEY (`id`),
  KEY `m_id` (`m_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_dmh_footprint`
--

LOCK TABLES `gc_dmh_footprint` WRITE;
/*!40000 ALTER TABLE `gc_dmh_footprint` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_dmh_footprint` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_dmh_goods_stay`
--

DROP TABLE IF EXISTS `gc_dmh_goods_stay`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_dmh_goods_stay` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `u_id` varchar(250) DEFAULT NULL COMMENT '用户id',
  `m_id` int(11) DEFAULT NULL COMMENT '商品id',
  `create_time` int(11) DEFAULT NULL COMMENT '添加时间',
  `s_id` int(11) DEFAULT NULL COMMENT '学校id',
  `wxapp_id` int(11) DEFAULT NULL COMMENT '平台id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_dmh_goods_stay`
--

LOCK TABLES `gc_dmh_goods_stay` WRITE;
/*!40000 ALTER TABLE `gc_dmh_goods_stay` DISABLE KEYS */;
INSERT INTO `gc_dmh_goods_stay` VALUES (114,'20',46,1654739496,13,6),(115,'16',46,1654758055,13,6),(116,'283',0,1655529802,12,6),(117,'285',47,1655534559,14,6),(119,'445',0,1656739538,12,6),(120,'348',0,1661578338,12,6);
/*!40000 ALTER TABLE `gc_dmh_goods_stay` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_dmh_market_category`
--

DROP TABLE IF EXISTS `gc_dmh_market_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_dmh_market_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `s_id` varchar(250) DEFAULT NULL COMMENT '学校id',
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `title` varchar(250) DEFAULT NULL COMMENT '名称',
  `image` varchar(250) DEFAULT NULL COMMENT '图标',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `sort` varchar(250) DEFAULT '0' COMMENT '排序',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8 COMMENT='二手市场分类';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_dmh_market_category`
--

LOCK TABLES `gc_dmh_market_category` WRITE;
/*!40000 ALTER TABLE `gc_dmh_market_category` DISABLE KEYS */;
INSERT INTO `gc_dmh_market_category` VALUES (16,'14','6','图书画册','',1654001416,'0'),(17,'14','6','电子数码','',1654001544,'0'),(18,'14','6','服装','',1654094197,'0'),(19,'14','6','饰品','',1654094205,'0'),(20,'12','6','图书画册','',1654642919,'0'),(21,'12','6','电子数码','',1654642928,'0'),(22,'12','6','服装','',1654642937,'0'),(23,'12','6','饰品','',1654642943,'0'),(24,'13','6','图书画册','',1654643056,'0'),(25,'13','6','电子数码','',1654643072,'0'),(26,'13','6','服装','',1654643079,'0'),(27,'13','6','饰品','',1654643084,'0');
/*!40000 ALTER TABLE `gc_dmh_market_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_dmh_market_category_copy1`
--

DROP TABLE IF EXISTS `gc_dmh_market_category_copy1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_dmh_market_category_copy1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `s_id` varchar(255) DEFAULT NULL COMMENT '学校id',
  `wxapp_id` varchar(255) DEFAULT NULL COMMENT '平台id',
  `title` varchar(255) DEFAULT NULL COMMENT '分类名称',
  `image` varchar(255) DEFAULT NULL COMMENT '分类图标',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='二手市场分类';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_dmh_market_category_copy1`
--

LOCK TABLES `gc_dmh_market_category_copy1` WRITE;
/*!40000 ALTER TABLE `gc_dmh_market_category_copy1` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_dmh_market_category_copy1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_dmh_market_category_stay`
--

DROP TABLE IF EXISTS `gc_dmh_market_category_stay`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_dmh_market_category_stay` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `s_id` varchar(250) DEFAULT NULL COMMENT '学校id',
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '小程序id',
  `m_id` varchar(250) DEFAULT NULL COMMENT '商品',
  `u_id` varchar(250) DEFAULT NULL COMMENT '用户昵称',
  `details` varchar(250) DEFAULT NULL COMMENT '评价内容',
  `pid` varchar(250) DEFAULT '0' COMMENT '上级',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_dmh_market_category_stay`
--

LOCK TABLES `gc_dmh_market_category_stay` WRITE;
/*!40000 ALTER TABLE `gc_dmh_market_category_stay` DISABLE KEYS */;
INSERT INTO `gc_dmh_market_category_stay` VALUES (55,'13','6','46','50','可以私聊','0',1654858491),(56,'14','6','47','285','留个v，私一下','0',1655534553),(57,'12','6','54','4773','有图嘛','0',1667564334);
/*!40000 ALTER TABLE `gc_dmh_market_category_stay` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_dmh_market_category_stay_copy1`
--

DROP TABLE IF EXISTS `gc_dmh_market_category_stay_copy1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_dmh_market_category_stay_copy1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `s_id` varchar(255) DEFAULT NULL COMMENT '学校id',
  `wxapp_id` varchar(255) DEFAULT NULL COMMENT '平台id',
  `m_id` varchar(255) DEFAULT NULL COMMENT '商品id',
  `uid` varchar(255) DEFAULT NULL COMMENT '用户id',
  `details` longtext COMMENT '评价内容',
  `pid` int(11) DEFAULT '0' COMMENT '上级id默认为0',
  `create_time` varchar(255) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品评论表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_dmh_market_category_stay_copy1`
--

LOCK TABLES `gc_dmh_market_category_stay_copy1` WRITE;
/*!40000 ALTER TABLE `gc_dmh_market_category_stay_copy1` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_dmh_market_category_stay_copy1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_dmh_market_category_stay_copy2`
--

DROP TABLE IF EXISTS `gc_dmh_market_category_stay_copy2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_dmh_market_category_stay_copy2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `s_id` varchar(255) DEFAULT NULL COMMENT '学校id',
  `wxapp_id` varchar(255) DEFAULT NULL COMMENT '平台id',
  `m_id` varchar(255) DEFAULT NULL COMMENT '商品id',
  `uid` varchar(255) DEFAULT NULL COMMENT '用户id',
  `details` longtext COMMENT '评价内容',
  `pid` int(11) DEFAULT '0' COMMENT '上级id默认为0',
  `create_time` varchar(255) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品评论表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_dmh_market_category_stay_copy2`
--

LOCK TABLES `gc_dmh_market_category_stay_copy2` WRITE;
/*!40000 ALTER TABLE `gc_dmh_market_category_stay_copy2` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_dmh_market_category_stay_copy2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_dmh_market_goods`
--

DROP TABLE IF EXISTS `gc_dmh_market_goods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_dmh_market_goods` (
  `m_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `s_id` varchar(250) DEFAULT NULL COMMENT '学校id',
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `image` varchar(250) DEFAULT NULL COMMENT '图标',
  `title` varchar(250) DEFAULT NULL COMMENT '名称',
  `pay` decimal(10,2) DEFAULT NULL COMMENT '金额',
  `price` decimal(10,2) DEFAULT NULL COMMENT '原价',
  `details` varchar(250) DEFAULT NULL COMMENT '详情描述',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `cid` smallint(6) DEFAULT NULL COMMENT '分类',
  `u_id` varchar(250) DEFAULT NULL COMMENT '用户id',
  `fabulous` int(11) DEFAULT NULL COMMENT '点赞',
  `state` smallint(6) DEFAULT '0' COMMENT '状态',
  `rotation` text COMMENT '轮播图',
  `phone` varchar(255) DEFAULT NULL COMMENT '手机号',
  `degree` varchar(250) DEFAULT NULL COMMENT '新旧程度',
  `stock` varchar(250) DEFAULT '0' COMMENT '库存',
  `examine` smallint(6) DEFAULT NULL COMMENT '审核状态',
  `name` varchar(255) DEFAULT NULL COMMENT '联系人',
  PRIMARY KEY (`m_id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_dmh_market_goods`
--

LOCK TABLES `gc_dmh_market_goods` WRITE;
/*!40000 ALTER TABLE `gc_dmh_market_goods` DISABLE KEYS */;
INSERT INTO `gc_dmh_market_goods` VALUES (45,'14','6','http://cdn.lansu.net.cn/api/202206/202206082116160225306.jpg','黑色小包包',99.00,999.99,'99',1654694219,16,'85',NULL,0,'http://cdn.lansu.net.cn/api/202206/202206082116160225306.jpg,http://cdn.lansu.net.cn/api/202206/202206082116160234146.jpg','15099814384','全新','1',1,NULL),(47,'14','6','https://cdn.lansu.net.cn/api/202206/202206121349370267050.jpg','1070ti',1200.00,3700.00,'索泰至尊1070ti，想换卡所以出',1655013049,17,'182',NULL,0,'https://cdn.lansu.net.cn/api/202206/202206121349370267050.jpg','18102816085','8成新','1',1,NULL),(50,'14','6','https://cdn.lansu.net.cn/api/202206/202206172150270263666.jpg','二手书',9.90,19.90,'随便挑一本 总会用的上',1655473951,16,'258',NULL,0,'https://cdn.lansu.net.cn/api/202206/202206172150270263666.jpg','13049619257','全新','30',1,NULL),(52,'12','6','https://cdn.lansu.net.cn/api/202206/202206181130520242445.jpg','便携式小风扇',18.00,28.00,'双电池供电，可充电',1655523084,21,'20',NULL,0,'https://cdn.lansu.net.cn/api/202206/202206181130520242445.jpg,https://cdn.lansu.net.cn/api/202206/202206181130520237173.jpg','15338832105','全新','10',1,NULL),(54,'12','6','https://cdn.lansu.net.cn/api/202206/202206192209500236222.jpg','显示器24寸75hz',150.00,459.00,'一个坏点，不影响使用，有线',1655648039,21,'311',NULL,0,'https://cdn.lansu.net.cn/api/202206/202206192209500236222.jpg,https://cdn.lansu.net.cn/api/202206/202206192212580283219.jpg,https://cdn.lansu.net.cn/api/202206/202206192213140295855.jpg','18307535346','6成新','1',1,NULL),(55,'12','6','https://cdn.lansu.net.cn/api/202206/202206192223540214163.jpg','罗技蓝牙键盘K480',50.00,139.00,'买来没怎么用，只有点灰，功能正常',1655648695,21,'311',NULL,0,'https://cdn.lansu.net.cn/api/202206/202206192223540214163.jpg,https://cdn.lansu.net.cn/api/202206/202206192224080236884.jpg','18307535346','8成新','1',1,NULL),(56,'14','6','https://cdn.lansu.net.cn/api/202207/202207231645380200005.jpg','扭扭棒发夹3r一个',3.00,3.00,'满30包邮开学后免配送',1658565994,19,'464',NULL,0,'https://cdn.lansu.net.cn/api/202207/202207231645380200005.jpg','13590980680','全新','30',1,NULL),(57,'14','6','https://cdn.lansu.net.cn/api/202210/202210091102140202911.jpg','华为随身WIFI3',180.00,300.00,'2M/S左右的速度，没有流量卡，两块电池',1665284543,17,'1651',NULL,1,'https://cdn.lansu.net.cn/api/202210/202210091102140202911.jpg','15725447737','9成新','1',0,NULL);
/*!40000 ALTER TABLE `gc_dmh_market_goods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_dmh_market_goods_copy1`
--

DROP TABLE IF EXISTS `gc_dmh_market_goods_copy1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_dmh_market_goods_copy1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `s_id` varchar(255) DEFAULT NULL COMMENT '学校id',
  `wxapp_id` varchar(255) DEFAULT NULL COMMENT '平台id',
  `image` longtext COMMENT '图标',
  `title` varchar(255) DEFAULT NULL COMMENT '商品名称',
  `pay` decimal(10,2) DEFAULT NULL COMMENT '商品价格',
  `price` decimal(10,2) DEFAULT NULL COMMENT '原价',
  `details` longtext COMMENT '详情描述',
  `create_time` varchar(255) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品列表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_dmh_market_goods_copy1`
--

LOCK TABLES `gc_dmh_market_goods_copy1` WRITE;
/*!40000 ALTER TABLE `gc_dmh_market_goods_copy1` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_dmh_market_goods_copy1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_dmh_market_order`
--

DROP TABLE IF EXISTS `gc_dmh_market_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_dmh_market_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `oid` varchar(250) DEFAULT NULL COMMENT '订单号',
  `s_id` varchar(250) DEFAULT NULL COMMENT '学校id',
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `m_id` smallint(6) DEFAULT NULL COMMENT '商品',
  `uid` varchar(250) DEFAULT NULL COMMENT '用户id',
  `pay` decimal(10,2) DEFAULT NULL COMMENT '价格',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `state` tinyint(4) DEFAULT NULL COMMENT '状态',
  `phone` varchar(250) DEFAULT NULL COMMENT '下单人手机号',
  `name` varchar(250) DEFAULT NULL COMMENT '下单人姓名',
  `other` varchar(250) DEFAULT NULL COMMENT '其他信息',
  `pay_time` int(11) DEFAULT NULL COMMENT '支付时间',
  `purchase` varchar(250) DEFAULT '0' COMMENT '购买用户id',
  `paystate` int(11) DEFAULT '0' COMMENT '支付状态',
  `reason` varchar(250) DEFAULT NULL COMMENT '退款理由',
  `commission` decimal(10,2) DEFAULT NULL COMMENT '平台扣点',
  `branch` decimal(10,2) unsigned DEFAULT '0.00' COMMENT '分校扣点',
  `pay_type` int(11) DEFAULT '0' COMMENT '付款方式 0微信 1翼支付',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_dmh_market_order`
--

LOCK TABLES `gc_dmh_market_order` WRITE;
/*!40000 ALTER TABLE `gc_dmh_market_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_dmh_market_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_dmh_market_order_copy1`
--

DROP TABLE IF EXISTS `gc_dmh_market_order_copy1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_dmh_market_order_copy1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `oid` varchar(255) DEFAULT NULL COMMENT '订单号',
  `s_id` varchar(255) DEFAULT NULL COMMENT '学校id',
  `wxapp_id` varchar(255) DEFAULT NULL COMMENT '平台id',
  `m_id` varchar(255) DEFAULT NULL COMMENT '商品id',
  `uid` varchar(255) DEFAULT NULL COMMENT '用户id',
  `pay` varchar(255) DEFAULT NULL COMMENT '支付金额',
  `create_time` varchar(255) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品订单';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_dmh_market_order_copy1`
--

LOCK TABLES `gc_dmh_market_order_copy1` WRITE;
/*!40000 ALTER TABLE `gc_dmh_market_order_copy1` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_dmh_market_order_copy1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_dmh_modular`
--

DROP TABLE IF EXISTS `gc_dmh_modular`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_dmh_modular` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(250) DEFAULT NULL COMMENT '名称',
  `image` varchar(250) DEFAULT NULL COMMENT '缩略图',
  `types` smallint(6) DEFAULT NULL COMMENT '类型',
  `start` decimal(10,2) DEFAULT NULL COMMENT '起步价',
  `ladder` decimal(10,2) DEFAULT NULL COMMENT '阶梯价格',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `s_id` varchar(250) DEFAULT NULL COMMENT '学校',
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `appid` varchar(250) DEFAULT NULL COMMENT ' 跳转的路径或者小程序APPID',
  `sort` int(11) DEFAULT '0' COMMENT '排序',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_dmh_modular`
--

LOCK TABLES `gc_dmh_modular` WRITE;
/*!40000 ALTER TABLE `gc_dmh_modular` DISABLE KEYS */;
INSERT INTO `gc_dmh_modular` VALUES (16,'快递代取','https://cdn.lansu.net.cn/subschool/202209/202209130003420280285.png',0,0.00,0.00,1654002978,'14','6','/gc_school/pages/public/index?type=1',0),(18,'快递代取','http://cdn.lansu.net.cn/subschool/202206/202206080611240240677.png',0,0.00,0.00,1654639896,'12','6','/gc_school/pages/public/index?type=1',0),(19,'快递代取','http://cdn.lansu.net.cn/subschool/202206/202206080627460203052.png',0,0.50,1.00,1654640876,'13','6','/gc_school/pages/public/index?type=1',0),(20,'寄件上门','http://cdn.lansu.net.cn/subschool/202206/202206081401280284472.png',0,1.00,1.00,1654667975,'12','6','/gc_school/pages/public/index?type=2',0),(21,'校园跑腿','https://cdn.lansu.net.cn/subschool/202210/202210201336590277511.png',0,3.50,1.00,1654668200,'12','6','/gc_school/pages/public/index?type=4',0),(22,'取件客服','http://cdn.lansu.net.cn/subschool/202206/202206081452350249540.png',0,2.00,1.00,1654671311,'12','6','/gc_school/pages/dmharticle/article?id=9?types=1',0),(23,'上门收件','http://cdn.lansu.net.cn/subschool/202206/202206081504150232420.png',0,0.50,1.00,1654671876,'13','6','/gc_school/pages/public/index?type=2',0),(32,'代取快递','https://test.fkynet.net/wximage/modules/qu_icon.png',0,0.00,0.00,1663469061,'17','6','/gc_school/pages/public/index?type=1',0),(33,'代寄快递','https://test.fkynet.net/wximage/modules/ji_icon.png',0,2.00,2.00,1663469061,'17','6','/gc_school/pages/public/index?type=2',0),(34,'校园跑腿','https://test.fkynet.net/wximage/modules/shi_icon.png',0,2.00,1.00,1663469061,'17','6','/gc_school/pages/public/index?type=4',0),(35,'万能任务','https://test.fkynet.net/wximage/modules/wan_icon.png',0,2.00,2.00,1663469061,'17','6','/gc_school/pages/public/index?type=4',0),(36,'没事闲聊','https://cdn.lansu.net.cn/subschool/202211/202211050243020276137.png',0,0.00,0.00,1663857796,'14','6','/gc_school/pages/article/index?types=1',0),(37,'快递兼职客服','https://cdn.lansu.net.cn/subschool/202210/202210091121340247524.png',0,0.00,0.00,1665285705,'13','6','/gc_school/pages/dmharticle/article?id=7?types=1',0),(38,'福利群客服','https://cdn.lansu.net.cn/subschool/202210/202210091129530266174.png',0,0.00,0.00,1665286196,'13','6','/gc_school/pages/dmharticle/article?id=8?types=1',0),(47,'代取必读','https://cdn.lansu.net.cn/subschool/202211/202211030438060292005.png',0,0.00,0.00,1667421479,'13','6','/gc_school/pages/dmharticle/article?id=28?types=1',0),(48,'代拿时间','https://cdn.lansu.net.cn/subschool/202211/202211030440540259908.png',0,0.00,0.00,1667421658,'13','6','/gc_school/pages/dmharticle/article?id=27?types=1',0),(49,'代寄必读','https://cdn.lansu.net.cn/subschool/202211/202211030446220222617.png',0,0.00,0.00,1667421996,'13','6','/gc_school/pages/dmharticle/article?id=26?types=1',0),(50,'查询取件码','https://cdn.lansu.net.cn/subschool/202211/202211030534470246697.png',0,0.00,0.00,1667424917,'13','6','/gc_school/pages/dmharticle/article?id=19 ?types=1',0),(52,'菜鸟退货','https://test.fkynet.net/wximage/modules/ji_icon.png',0,0.00,0.00,1667584924,'14','6','/gc_school/pages/dmharticle/article?id=3?types=1',0),(61,'催单退单','https://test.fkynet.net/wximage/modules/shi_icon.png',0,0.00,0.00,1667585241,'14','6','/gc_school/pages/dmharticle/article?id=5?types=1',0),(67,'寻物启事','https://cdn.lansu.net.cn/subschool/202211/202211050231570297236.png',0,0.00,0.00,1667586515,'14','6','/gc_school/pages/lost/index?types=1',0),(68,'二手交易','https://cdn.lansu.net.cn/subschool/202211/202211050232510274410.png',0,0.00,0.00,1667586793,'14','6','/gc_school/pages/secondhand/index?types=1',0),(69,'美食福利','https://cdn.lansu.net.cn/subschool/202211/202211050236400209421.png',0,0.00,0.00,1667587014,'14','6','/gc_school/pages/dmharticle/article?id=21?types=1   ',0),(70,'商务合作','https://cdn.lansu.net.cn/subschool/202211/202211050241300250180.png',0,0.00,0.00,1667587294,'14','6','/gc_school/pages/dmharticle/article?id=22	?types=1',0),(71,'找兼职请看这','https://cdn.lansu.net.cn/subschool/202211/202211052049260269239.png',0,0.00,0.00,1667652572,'13','6','/gc_school/pages/dmharticle/article?id=24?types=1',0);
/*!40000 ALTER TABLE `gc_dmh_modular` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_dmh_rotation`
--

DROP TABLE IF EXISTS `gc_dmh_rotation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_dmh_rotation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL COMMENT '图片链接',
  `type` varchar(1) DEFAULT NULL COMMENT '类型 3外部小程序 2内部页面 1外链（WEB页面）',
  `url` varchar(255) NOT NULL COMMENT '链接',
  `wxapp_id` varchar(255) DEFAULT NULL COMMENT '平台id',
  `s_id` varchar(255) DEFAULT NULL COMMENT '学校id',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='小程序轮播图';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_dmh_rotation`
--

LOCK TABLES `gc_dmh_rotation` WRITE;
/*!40000 ALTER TABLE `gc_dmh_rotation` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_dmh_rotation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_dmh_school_carry`
--

DROP TABLE IF EXISTS `gc_dmh_school_carry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_dmh_school_carry` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `s_id` int(11) DEFAULT NULL COMMENT '学校id',
  `create_time` int(11) DEFAULT NULL COMMENT '添加时间',
  `state` smallint(6) DEFAULT NULL COMMENT '状态',
  `pay` decimal(10,2) DEFAULT NULL COMMENT '金额',
  `alipay_name` varchar(250) DEFAULT NULL COMMENT '支付宝姓名',
  `alipay_account` varchar(250) DEFAULT NULL COMMENT '支付宝账户',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_dmh_school_carry`
--

LOCK TABLES `gc_dmh_school_carry` WRITE;
/*!40000 ALTER TABLE `gc_dmh_school_carry` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_dmh_school_carry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_dmh_school_order`
--

DROP TABLE IF EXISTS `gc_dmh_school_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_dmh_school_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `s_id` varchar(250) DEFAULT NULL COMMENT '学校id',
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `u_id` int(11) DEFAULT NULL,
  `status` smallint(6) DEFAULT '1' COMMENT '未支付|1,待接单|2,待取货|3,到送达|7,已完成|4,已过期|5,未完成|6,已取消|8,等待取消抢单|9',
  `img` varchar(250) DEFAULT NULL COMMENT '图片',
  `ordersn` varchar(250) DEFAULT NULL COMMENT '订单号',
  `type` smallint(6) DEFAULT NULL COMMENT '订单类型   取件|1,寄件|2,超市食堂|3,无所不能/饮品|4',
  `remarks` varchar(250) DEFAULT NULL COMMENT '订单备注',
  `attach_file` varchar(250) DEFAULT NULL COMMENT '附件地址',
  `sex_limit` smallint(6) DEFAULT NULL COMMENT '接单员性别限制',
  `weight` varchar(250) DEFAULT NULL COMMENT '物品重量',
  `express_num` int(11) DEFAULT NULL COMMENT '件数',
  `start_time` int(11) DEFAULT NULL COMMENT '开始时间',
  `door_time` int(11) DEFAULT NULL COMMENT '预计上门时间',
  `start_openid` varchar(250) DEFAULT NULL COMMENT '发起用户openid',
  `end_openid` varchar(250) DEFAULT NULL COMMENT '抢单用户openid',
  `sh_name` varchar(250) DEFAULT NULL COMMENT '收货姓名',
  `sh_sex` smallint(6) DEFAULT NULL COMMENT '收货性别',
  `sh_phone` varchar(250) DEFAULT NULL COMMENT '收货联系手机号',
  `sh_school` varchar(250) DEFAULT NULL COMMENT '收货学校',
  `sh_addres` varchar(250) DEFAULT NULL COMMENT '具体收货地址',
  `service_num` int(11) DEFAULT NULL COMMENT '服务人数',
  `qu_addres` varchar(250) DEFAULT NULL COMMENT '取货具体地址',
  `co_id` varchar(250) DEFAULT NULL COMMENT '优惠券id',
  `co_name` varchar(250) DEFAULT NULL COMMENT '名称',
  `store_id` varchar(250) DEFAULT NULL COMMENT '商家id',
  `y_money` decimal(10,2) DEFAULT NULL COMMENT '优惠券金额',
  `total` decimal(10,2) DEFAULT NULL COMMENT '总价（跑腿费）',
  `t_money` decimal(10,2) DEFAULT NULL COMMENT '实付金额',
  `s_money` decimal(10,2) DEFAULT '0.00' COMMENT '跑腿被抽取的手续费',
  `fxs_money` decimal(10,2) DEFAULT '0.00' COMMENT '学校收取手续费',
  `store_money` decimal(10,2) DEFAULT NULL COMMENT '商家抽成费用',
  `food_money` decimal(10,2) DEFAULT NULL COMMENT '商品价格',
  `createtime` int(11) DEFAULT NULL COMMENT '创建时间',
  `updatetime` int(11) DEFAULT NULL COMMENT '更新时间',
  `out_time` int(11) DEFAULT NULL COMMENT '订单过期时间',
  `cancel_time` int(11) DEFAULT NULL COMMENT '取消时间',
  `out_time_num` int(11) DEFAULT NULL COMMENT '超时',
  `good_details` text COMMENT '商品详情',
  `cancel_from` varchar(250) DEFAULT NULL COMMENT '取消抢单来自哪一方:user:下单者,rider:骑手',
  `refuse_reason` varchar(250) DEFAULT NULL COMMENT '拒绝原因',
  `proof` varchar(250) DEFAULT NULL COMMENT '凭证',
  `is_refuse` int(11) DEFAULT NULL COMMENT '是否拒绝',
  `title` varchar(250) DEFAULT NULL COMMENT '标题',
  `is_start_show` int(11) DEFAULT NULL COMMENT '开始时间是否显示',
  `qu_phone` varchar(20) DEFAULT NULL COMMENT '寄件取货联系电话',
  `qu_name` varchar(250) DEFAULT NULL COMMENT '寄件取货姓名',
  `qu_sex` tinyint(4) DEFAULT NULL COMMENT '寄件 取货  性别 ',
  `pay_time` int(11) DEFAULT NULL COMMENT '用户支付时间',
  `cancel_reason` varchar(250) DEFAULT NULL COMMENT '取消原因',
  `fx_store_money` decimal(10,2) DEFAULT '0.00' COMMENT '分校商家抽成',
  `service_price` decimal(10,2) DEFAULT '0.00' COMMENT '服务费',
  `box_fee` decimal(10,2) DEFAULT '0.00' COMMENT '餐盒费',
  `delete_time` varchar(255) DEFAULT NULL,
  `pay_type` int(11) DEFAULT '0' COMMENT '0为微信支付，1为翼支付',
  `express_info` text COMMENT '快递信息',
  `is_store_delivery` int(11) DEFAULT '1' COMMENT '是否商家配送,1为骑手，2为商家',
  `express_id` int(11) DEFAULT NULL COMMENT '快递点id',
  `is_open_pay` int(11) DEFAULT '0' COMMENT '骑手是否垫付，0为关闭，1为开启',
  `pick_number` int(11) DEFAULT NULL COMMENT '取餐编号',
  `ordertime` varchar(255) DEFAULT NULL COMMENT '校外配送时间',
  `givetype` int(11) DEFAULT '0' COMMENT '是否开启自定义时间1为开启',
  `is_self_lifting` int(11) DEFAULT '0' COMMENT '是否自提：0为否，1为是',
  `arrival_time` varchar(255) DEFAULT NULL COMMENT '到店自取时间',
  `phone` varchar(255) DEFAULT NULL COMMENT '自取手机号',
  PRIMARY KEY (`id`),
  KEY `store_money` (`store_money`),
  KEY `food_money` (`food_money`),
  KEY `type` (`type`),
  KEY `status` (`status`),
  KEY `start_openid` (`start_openid`),
  KEY `end_openid` (`end_openid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_dmh_school_order`
--

LOCK TABLES `gc_dmh_school_order` WRITE;
/*!40000 ALTER TABLE `gc_dmh_school_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_dmh_school_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_dmh_school_order_plus_price`
--

DROP TABLE IF EXISTS `gc_dmh_school_order_plus_price`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_dmh_school_order_plus_price` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ordersn` varchar(255) DEFAULT NULL,
  `wxapp_id` int(11) DEFAULT NULL,
  `s_id` int(11) DEFAULT NULL,
  `o_id` int(11) DEFAULT NULL COMMENT '关联的订单id',
  `u_id` int(11) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `order_status` int(11) NOT NULL DEFAULT '0' COMMENT '对应的订单状态',
  `pay_status` int(11) DEFAULT '0' COMMENT '支付状态：0为未支付，1为已支付',
  `pay_time` varchar(255) DEFAULT NULL,
  `is_refund` int(11) DEFAULT '0' COMMENT '是否退款',
  `refund_time` varchar(255) DEFAULT NULL COMMENT '退款时间',
  `addtime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `pay_type` int(11) DEFAULT '0' COMMENT '0为微信支付，1为翼支付',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=389 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_dmh_school_order_plus_price`
--

LOCK TABLES `gc_dmh_school_order_plus_price` WRITE;
/*!40000 ALTER TABLE `gc_dmh_school_order_plus_price` DISABLE KEYS */;
INSERT INTO `gc_dmh_school_order_plus_price` VALUES (1,'202207051929407354',6,14,224,451,10.00,2,0,NULL,0,NULL,'2022-07-05 11:29:40',0),(2,'202208271121022262',6,14,250,568,20.00,2,0,NULL,0,NULL,'2022-08-27 03:21:02',0),(3,'202208271121065540',6,14,250,568,5.00,2,0,NULL,0,NULL,'2022-08-27 03:21:06',0),(4,'202208271121078160',6,14,250,568,5.00,2,1,'2022-08-27 11:21:11',1,'2022-08-27 12:06:53','2022-08-27 03:21:07',0),(5,'202208271202083208',6,14,250,568,5.00,2,1,'2022-08-27 12:02:13',1,'2022-08-27 12:06:54','2022-08-27 04:02:08',0),(6,'202208271727446116',6,14,291,616,3.00,2,1,'2022-08-27 17:27:48',1,'2022-08-27 19:12:53','2022-08-27 09:27:44',0),(7,'202208271736072778',6,14,271,560,5.00,2,1,'2022-08-27 17:36:12',1,'2022-08-27 18:13:20','2022-08-27 09:36:07',0),(8,'202208271832376725',6,14,302,629,1.50,2,1,'2022-08-27 18:32:42',0,NULL,'2022-08-27 10:32:37',0),(9,'202208271918217426',6,14,287,619,1.00,2,1,'2022-08-27 19:18:28',1,'2022-08-27 19:45:27','2022-08-27 11:18:21',0),(10,'202208271946211607',6,14,308,633,1.50,2,1,'2022-08-27 19:46:26',1,'2022-08-27 20:24:11','2022-08-27 11:46:21',0),(11,'202208280916125994',6,14,327,652,4.00,2,1,'2022-08-28 09:16:16',1,'2022-08-28 09:19:43','2022-08-28 01:16:12',0),(12,'202208280916134653',6,14,327,652,4.00,2,0,NULL,0,NULL,'2022-08-28 01:16:13',0),(13,'202208281534333730',6,14,364,683,1.50,3,1,'2022-08-28 15:34:38',0,NULL,'2022-08-28 07:34:33',0),(14,'202208281734564445',6,14,372,544,10.00,2,1,'2022-08-28 17:35:02',1,'2022-08-28 17:49:11','2022-08-28 09:34:56',0),(15,'202208281935177706',6,14,382,682,2.00,3,1,'2022-08-28 19:35:23',1,'2022-08-30 11:10:12','2022-08-28 11:35:17',0),(16,'202208291157239614',6,12,398,709,5.00,2,0,NULL,0,NULL,'2022-08-29 03:57:23',0),(17,'202208291157297713',6,12,398,709,2.00,2,1,'2022-08-29 11:57:33',1,'2022-08-29 12:41:18','2022-08-29 03:57:29',0),(18,'202208291751537160',6,12,425,759,8.00,2,1,'2022-08-29 17:51:57',1,'2022-08-29 18:07:56','2022-08-29 09:51:53',0),(19,'202208291809304000',6,12,426,759,8.00,2,1,'2022-08-29 18:09:34',0,NULL,'2022-08-29 10:09:30',0),(20,'202208292225091022',6,14,430,544,3.00,2,1,'2022-08-29 22:25:15',0,NULL,'2022-08-29 14:25:09',0),(21,'202208311145503068',6,12,477,833,5.00,2,1,'2022-08-31 11:46:06',1,'2022-08-31 11:48:46','2022-08-31 03:45:50',0),(22,'202208311234218921',6,14,479,617,10.00,2,0,NULL,0,NULL,'2022-08-31 04:34:21',0),(23,'202208311234269639',6,14,479,617,3.00,2,1,'2022-08-31 12:34:31',1,'2022-08-31 12:42:10','2022-08-31 04:34:26',0),(24,'202208311932404930',6,12,516,865,3.00,2,1,'2022-08-31 19:32:47',0,NULL,'2022-08-31 11:32:40',0),(25,'202209011130059863',6,12,602,917,1.00,2,1,'2022-09-01 11:30:10',1,'2022-09-01 16:45:19','2022-09-01 03:30:05',0),(26,'202209011134276726',6,12,602,917,1.00,2,1,'2022-09-01 11:34:32',1,'2022-09-01 16:45:20','2022-09-01 03:34:27',0),(27,'202209011300202619',6,13,615,805,1.00,2,0,NULL,0,NULL,'2022-09-01 05:00:20',0),(28,'202209011301224922',6,13,615,805,2.00,2,1,'2022-09-01 13:01:29',1,'2022-09-01 13:55:11','2022-09-01 05:01:22',0),(29,'202209021643491919',6,12,666,982,1.00,2,1,'2022-09-02 16:43:55',1,'2022-09-02 18:00:23','2022-09-02 08:43:49',0),(30,'202209031218568361',6,12,717,992,3.00,2,1,'2022-09-03 12:19:06',0,NULL,'2022-09-03 04:18:56',0),(31,'202209031654588944',6,12,747,1081,0.50,2,1,'2022-09-03 16:55:04',1,'2022-09-03 17:57:50','2022-09-03 08:54:58',0),(32,'202209032120261054',6,14,776,1133,0.50,2,0,NULL,0,NULL,'2022-09-03 13:20:26',0),(33,'202209032120275172',6,14,776,1133,0.50,2,1,'2022-09-03 21:20:33',1,'2022-09-03 21:33:17','2022-09-03 13:20:27',0),(34,'202209041024216541',6,12,792,1157,1.50,2,1,'2022-09-04 10:24:27',0,NULL,'2022-09-04 02:24:21',0),(35,'202209041545086829',6,12,820,1158,3.50,2,1,'2022-09-04 15:45:36',0,NULL,'2022-09-04 07:45:08',0),(36,'202209051437364489',6,14,879,1245,2.00,2,1,'2022-09-05 14:37:41',1,'2022-09-05 14:38:23','2022-09-05 06:37:36',0),(37,'202209051730329587',6,12,903,1241,2.00,2,1,'2022-09-05 17:30:39',0,NULL,'2022-09-05 09:30:32',0),(38,'202209051827332294',6,12,912,1266,10.00,2,1,'2022-09-05 18:27:40',1,'2022-09-06 14:05:44','2022-09-05 10:27:33',0),(39,'202209061118123372',6,14,939,1077,1.00,2,1,'2022-09-06 11:18:18',1,'2022-09-06 11:19:09','2022-09-06 03:18:12',0),(40,'202209061651516895',6,12,979,250,0.50,2,1,'2022-09-06 16:51:57',0,NULL,'2022-09-06 08:51:51',0),(41,'202209062022442484',6,12,995,1343,2.00,2,1,'2022-09-06 20:22:50',1,'2022-09-06 20:22:58','2022-09-06 12:22:44',0),(42,'202209071036253098',6,12,1004,1301,0.50,2,1,'2022-09-07 10:36:35',1,'2022-09-07 11:54:28','2022-09-07 02:36:25',0),(43,'202209071039198345',6,12,1010,1253,2.00,2,1,'2022-09-07 10:39:25',0,NULL,'2022-09-07 02:39:19',0),(44,'202209071039209839',6,12,1010,1253,2.00,2,0,NULL,0,NULL,'2022-09-07 02:39:20',0),(45,'202209071114096289',6,12,1011,1348,4.00,2,0,NULL,0,NULL,'2022-09-07 03:14:09',0),(46,'202209071117117993',6,12,1011,1348,4.00,2,1,'2022-09-07 11:17:16',1,'2022-09-07 11:17:52','2022-09-07 03:17:11',0),(47,'202209081747267201',6,12,1123,1408,8.00,2,0,NULL,0,NULL,'2022-09-08 09:47:26',0),(48,'202209081747335932',6,12,1123,1408,8.00,2,0,NULL,0,NULL,'2022-09-08 09:47:33',0),(49,'202209081747408184',6,12,1123,1408,7.00,2,1,'2022-09-08 17:47:46',1,'2022-09-08 19:52:57','2022-09-08 09:47:40',0),(50,'202209081851089478',6,12,1124,820,1.00,2,1,'2022-09-08 18:51:14',1,'2022-09-08 18:51:52','2022-09-08 10:51:08',0),(51,'202209081851094258',6,12,1124,820,1.00,2,0,NULL,0,NULL,'2022-09-08 10:51:09',0),(52,'202209081851096504',6,12,1124,820,1.00,2,0,NULL,0,NULL,'2022-09-08 10:51:09',0),(53,'202209081937324173',6,12,1135,906,1.50,2,1,'2022-09-08 19:37:40',1,'2022-09-08 21:04:29','2022-09-08 11:37:32',0),(54,'202209081955028074',6,12,1129,1412,3.00,2,1,'2022-09-08 19:55:09',1,'2022-09-08 20:26:00','2022-09-08 11:55:02',0),(55,'202209081956565854',6,12,1128,1115,1.00,2,1,'2022-09-08 19:57:01',0,NULL,'2022-09-08 11:56:56',0),(56,'202209091325466519',6,14,1163,1423,4.00,2,0,NULL,0,NULL,'2022-09-09 05:25:46',0),(57,'202209091325572429',6,14,1163,1423,0.50,2,1,'2022-09-09 13:26:04',0,NULL,'2022-09-09 05:25:57',0),(58,'202209091704175198',6,12,1188,254,2.00,2,1,'2022-09-09 17:04:23',0,NULL,'2022-09-09 09:04:17',0),(59,'202209091740347390',6,12,1182,1367,6.00,2,0,NULL,0,NULL,'2022-09-09 09:40:34',0),(60,'202209091740425151',6,12,1182,1367,0.50,2,1,'2022-09-09 17:40:46',1,'2022-09-09 17:41:07','2022-09-09 09:40:42',0),(61,'202209092025392879',6,12,1186,1280,1.00,2,0,NULL,0,NULL,'2022-09-09 12:25:39',0),(62,'202209092025424437',6,12,1186,1280,1.00,2,0,NULL,0,NULL,'2022-09-09 12:25:42',0),(63,'202209092025428892',6,12,1186,1280,1.00,2,0,NULL,0,NULL,'2022-09-09 12:25:42',0),(64,'202209092025439372',6,12,1186,1280,1.00,2,0,NULL,0,NULL,'2022-09-09 12:25:43',0),(65,'202209092025444538',6,12,1186,1280,1.00,2,0,NULL,0,NULL,'2022-09-09 12:25:44',0),(66,'202209092025446459',6,12,1186,1280,1.00,2,0,NULL,0,NULL,'2022-09-09 12:25:44',0),(67,'202209092025458346',6,12,1186,1280,1.00,2,0,NULL,0,NULL,'2022-09-09 12:25:45',0),(68,'202209092025453485',6,12,1186,1280,1.00,2,0,NULL,0,NULL,'2022-09-09 12:25:45',0),(69,'202209101147196452',6,12,1221,1444,1.50,2,1,'2022-09-10 11:47:24',0,NULL,'2022-09-10 03:47:19',0),(70,'202209101428501071',6,13,1214,1313,2.00,2,1,'2022-09-10 14:28:57',1,'2022-09-10 14:46:43','2022-09-10 06:28:50',0),(71,'202209101643199915',6,14,1248,557,1.50,2,1,'2022-09-10 16:43:24',1,'2022-09-10 16:57:27','2022-09-10 08:43:19',0),(72,'202209101833253154',6,12,1276,1479,5.00,2,1,'2022-09-10 18:33:29',1,'2022-09-10 18:33:39','2022-09-10 10:33:25',0),(73,'202209102124405312',6,12,1269,1246,3.50,2,1,'2022-09-10 21:24:46',1,'2022-09-11 10:36:01','2022-09-10 13:24:40',0),(74,'202209102124414018',6,12,1269,1246,3.50,2,0,NULL,0,NULL,'2022-09-10 13:24:41',0),(75,'202209110955587650',6,14,1292,1446,5.00,2,0,NULL,0,NULL,'2022-09-11 01:55:58',0),(76,'202209111014171386',6,14,1294,1446,5.00,2,1,'2022-09-11 10:14:22',1,'2022-09-11 13:14:03','2022-09-11 02:14:17',0),(77,'202209111021535175',6,14,1295,1487,6.00,2,0,NULL,0,NULL,'2022-09-11 02:21:53',0),(78,'202209111201034699',6,12,1305,1490,3.00,2,0,NULL,0,NULL,'2022-09-11 04:01:03',0),(79,'202209111716434150',6,14,1321,1074,1.00,2,1,'2022-09-11 17:16:49',0,NULL,'2022-09-11 09:16:43',0),(80,'202209111744285125',6,12,1348,1515,3.00,2,1,'2022-09-11 17:44:33',1,'2022-09-11 21:15:11','2022-09-11 09:44:28',0),(81,'202209112206344190',6,12,1356,1518,6.00,2,0,NULL,0,NULL,'2022-09-11 14:06:34',0),(82,'202209112206439793',6,12,1356,1518,2.00,2,1,'2022-09-11 22:06:49',1,'2022-09-11 22:06:55','2022-09-11 14:06:43',0),(83,'202209121228549719',6,14,1371,1529,2.00,2,1,'2022-09-12 12:28:59',0,NULL,'2022-09-12 04:28:54',0),(84,'202209121807531594',6,12,1420,1549,1.00,2,1,'2022-09-12 18:07:59',1,'2022-09-12 18:09:21','2022-09-12 10:07:53',0),(85,'202209121818337796',6,14,1401,1544,2.00,2,1,'2022-09-12 18:18:39',1,'2022-09-12 18:18:46','2022-09-12 10:18:33',0),(86,'202209121855507218',6,12,1423,1225,3.00,2,0,NULL,0,NULL,'2022-09-12 10:55:50',0),(87,'202209121855572765',6,12,1423,1225,1.00,2,1,'2022-09-12 18:56:08',0,NULL,'2022-09-12 10:55:57',0),(88,'202209131407208188',6,14,1530,1589,4.00,2,1,'2022-09-13 14:07:24',1,'2022-09-13 14:07:49','2022-09-13 06:07:20',0),(89,'202209131408203699',6,14,1526,1588,5.00,2,1,'2022-09-13 14:08:24',1,'2022-09-13 14:09:54','2022-09-13 06:08:20',0),(90,'202209131509233027',6,14,1488,1572,2.00,2,1,'2022-09-13 15:09:29',0,NULL,'2022-09-13 07:09:23',0),(91,'202209131509474194',6,14,1489,1572,2.00,2,0,NULL,0,NULL,'2022-09-13 07:09:47',0),(92,'202209131510072134',6,14,1489,1572,2.00,2,1,'2022-09-13 15:10:19',0,NULL,'2022-09-13 07:10:07',0),(93,'202209131510084022',6,14,1489,1572,2.00,2,0,NULL,0,NULL,'2022-09-13 07:10:08',0),(94,'202209131541567781',6,14,1484,1571,12.00,2,0,NULL,0,NULL,'2022-09-13 07:41:56',0),(95,'202209131552007661',6,14,1542,1592,3.50,2,1,'2022-09-13 15:52:06',1,'2022-09-13 15:54:21','2022-09-13 07:52:00',0),(96,'202209131605075213',6,14,1557,1592,2.50,2,1,'2022-09-13 16:05:13',0,NULL,'2022-09-13 08:05:07',0),(97,'202209131623136126',6,14,1552,1595,5.00,2,1,'2022-09-13 16:23:18',0,NULL,'2022-09-13 08:23:13',0),(98,'202209131718545825',6,14,1589,1138,5.00,2,1,'2022-09-13 17:19:00',0,NULL,'2022-09-13 09:18:54',0),(99,'202209131801458950',6,12,1602,1615,2.00,2,0,NULL,0,NULL,'2022-09-13 10:01:45',0),(100,'202209131801467532',6,12,1602,1615,2.00,2,0,NULL,0,NULL,'2022-09-13 10:01:46',0),(101,'202209131802282498',6,12,1602,1615,2.00,2,0,NULL,0,NULL,'2022-09-13 10:02:28',0),(102,'202209131843224321',6,12,1602,1615,2.00,2,1,'2022-09-13 18:43:31',1,'2022-09-14 09:03:28','2022-09-13 10:43:22',0),(103,'202209132029445105',6,12,1625,1626,1.00,2,1,'2022-09-13 20:29:49',1,'2022-09-13 20:29:58','2022-09-13 12:29:44',0),(104,'202209132030332604',6,14,1623,1519,20.00,2,0,NULL,0,NULL,'2022-09-13 12:30:33',0),(105,'202209132030402734',6,14,1623,1519,6.50,2,1,'2022-09-13 20:30:45',1,'2022-09-14 00:13:27','2022-09-13 12:30:40',0),(106,'202209140843442195',6,14,1620,1616,8.00,2,0,NULL,0,NULL,'2022-09-14 00:43:44',0),(107,'202209140843455819',6,14,1620,1616,8.00,2,0,NULL,0,NULL,'2022-09-14 00:43:45',0),(108,'202209140843577285',6,14,1620,1616,2.50,2,1,'2022-09-14 08:44:02',1,'2022-09-14 08:44:14','2022-09-14 00:43:57',0),(109,'202209141008595808',6,14,1669,1651,15.00,2,1,'2022-09-14 10:09:04',0,NULL,'2022-09-14 02:08:59',0),(110,'202209141009319722',6,14,1668,1651,10.00,2,1,'2022-09-14 10:09:36',0,NULL,'2022-09-14 02:09:31',0),(111,'202209141029434865',6,14,1680,1654,1.50,2,1,'2022-09-14 10:29:48',0,NULL,'2022-09-14 02:29:43',0),(112,'202209141323262634',6,14,1743,1683,5.00,2,1,'2022-09-14 13:23:32',1,'2022-09-14 13:51:03','2022-09-14 05:23:26',0),(113,'202209141330539922',6,14,1597,1612,5.00,3,1,'2022-09-14 13:31:00',0,NULL,'2022-09-14 05:30:53',0),(114,'202209141330548714',6,14,1597,1612,5.00,3,0,NULL,0,NULL,'2022-09-14 05:30:54',0),(115,'202209141338105271',6,14,1597,1612,5.00,3,1,'2022-09-14 13:38:18',0,NULL,'2022-09-14 05:38:10',0),(116,'202209141423208581',6,14,1720,1671,5.00,3,1,'2022-09-14 14:23:25',0,NULL,'2022-09-14 06:23:20',0),(117,'202209141439447763',6,14,1764,1693,1.00,2,1,'2022-09-14 14:39:53',1,'2022-09-14 15:17:45','2022-09-14 06:39:44',0),(118,'202209141439458638',6,14,1764,1693,1.00,2,0,NULL,0,NULL,'2022-09-14 06:39:45',0),(119,'202209141456221553',6,14,1764,1693,2.00,2,1,'2022-09-14 14:56:29',1,'2022-09-14 15:17:46','2022-09-14 06:56:22',0),(120,'202209141804562063',6,14,1803,1710,1.50,2,1,'2022-09-14 18:05:02',1,'2022-09-14 18:05:36','2022-09-14 10:04:56',0),(121,'202209141804578274',6,14,1803,1710,1.50,2,0,NULL,0,NULL,'2022-09-14 10:04:57',0),(122,'202209151046137842',6,14,1859,1733,1.00,2,1,'2022-09-15 10:46:21',0,NULL,'2022-09-15 02:46:13',0),(123,'202209151106237084',6,14,1859,1733,1.00,2,1,'2022-09-15 11:06:29',0,NULL,'2022-09-15 03:06:23',0),(124,'202209151106246145',6,14,1859,1733,1.00,2,1,'2022-09-15 11:06:41',0,NULL,'2022-09-15 03:06:24',0),(125,'202209151529287862',6,14,1862,1734,1.50,3,1,'2022-09-15 15:29:39',0,NULL,'2022-09-15 07:29:28',0),(126,'202209151530121951',6,14,1862,1734,0.20,3,1,'2022-09-15 15:30:18',0,NULL,'2022-09-15 07:30:12',0),(127,'202209151825524153',6,14,1939,1770,1.50,2,0,NULL,0,NULL,'2022-09-15 10:25:52',0),(128,'202209161217496282',6,12,1944,1781,1.00,2,1,'2022-09-16 12:17:55',1,'2022-09-16 12:24:41','2022-09-16 04:17:49',0),(129,'202209161217506212',6,12,1944,1781,1.00,2,0,NULL,0,NULL,'2022-09-16 04:17:50',0),(130,'202209161401582580',6,14,1960,1789,5.00,2,1,'2022-09-16 14:02:06',1,'2022-09-16 14:06:08','2022-09-16 06:01:58',0),(131,'202209161648263191',6,12,1996,1225,1.00,2,1,'2022-09-16 16:48:31',1,'2022-09-17 16:21:30','2022-09-16 08:48:26',0),(132,'202209161755498712',6,14,2008,1805,1.50,2,1,'2022-09-16 17:55:54',0,NULL,'2022-09-16 09:55:49',0),(133,'202209161755592607',6,14,2007,1805,1.50,2,1,'2022-09-16 17:56:11',0,NULL,'2022-09-16 09:55:59',0),(134,'202209161756186590',6,14,2005,1805,1.50,2,0,NULL,0,NULL,'2022-09-16 09:56:18',0),(135,'202209161756236326',6,14,2005,1805,1.50,2,1,'2022-09-16 17:56:32',0,NULL,'2022-09-16 09:56:23',0),(136,'202209161800089670',6,14,1958,1787,2.50,3,1,'2022-09-16 18:00:13',0,NULL,'2022-09-16 10:00:08',0),(137,'202209171124498088',6,14,2047,1828,2.50,3,1,'2022-09-17 11:24:55',0,NULL,'2022-09-17 03:24:49',0),(138,'202209171222256707',6,14,2047,1828,2.00,3,0,NULL,0,NULL,'2022-09-17 04:22:25',0),(139,'202209171654005008',6,14,2122,1863,2.00,2,0,NULL,0,NULL,'2022-09-17 08:54:00',0),(140,'202209171654002754',6,14,2122,1863,2.00,2,1,'2022-09-17 16:54:06',1,'2022-09-17 17:17:33','2022-09-17 08:54:00',0),(141,'202209171751001185',6,12,2036,1383,1.50,2,1,'2022-09-17 17:51:07',1,'2022-09-17 18:04:03','2022-09-17 09:51:00',0),(142,'202209171751005708',6,12,2036,1383,1.50,2,0,NULL,0,NULL,'2022-09-17 09:51:00',0),(143,'202209172001542982',6,12,2156,882,0.50,2,1,'2022-09-17 20:02:00',1,'2022-09-24 11:31:46','2022-09-17 12:01:54',0),(144,'202209172350061210',6,14,2164,1784,4.00,2,0,NULL,0,NULL,'2022-09-17 15:50:06',0),(145,'202209181016156494',6,14,2163,1857,8.00,3,0,NULL,0,NULL,'2022-09-18 02:16:15',0),(146,'202209181016265743',6,14,2163,1857,2.50,3,1,'2022-09-18 10:16:32',0,NULL,'2022-09-18 02:16:26',0),(147,'202209181204447970',6,14,2228,1790,0.50,2,0,NULL,0,NULL,'2022-09-18 04:04:44',0),(148,'202209181237013124',6,14,2204,1402,5.00,2,1,'2022-09-18 12:37:07',0,NULL,'2022-09-18 04:37:01',0),(149,'202209181328357687',6,14,2208,1909,2.00,2,1,'2022-09-18 13:28:41',0,NULL,'2022-09-18 05:28:35',0),(150,'202209181417316827',6,14,2174,715,4.00,2,0,NULL,0,NULL,'2022-09-18 06:17:31',0),(151,'202209181417375109',6,14,2174,715,0.50,2,1,'2022-09-18 14:17:43',0,NULL,'2022-09-18 06:17:37',0),(152,'202209191045415949',6,14,2378,1874,4.00,2,1,'2022-09-19 10:45:45',1,'2022-09-19 11:06:54','2022-09-19 02:45:41',0),(153,'202209191057536263',6,14,2392,1957,5.00,2,1,'2022-09-19 10:57:58',0,NULL,'2022-09-19 02:57:53',0),(154,'202209191130337884',6,14,2415,2003,1.00,2,1,'2022-09-19 11:30:39',1,'2022-09-19 22:43:35','2022-09-19 03:30:33',0),(155,'202209191226074921',6,14,2415,2003,10.00,2,1,'2022-09-19 12:26:13',1,'2022-09-19 22:43:35','2022-09-19 04:26:07',0),(156,'202209191853035386',6,12,2542,1000,1.00,2,1,'2022-09-19 18:53:07',1,'2022-09-19 20:47:02','2022-09-19 10:53:03',0),(157,'202209192049081181',6,14,2431,960,0.50,2,1,'2022-09-19 20:49:16',0,NULL,'2022-09-19 12:49:08',0),(158,'202209201050183554',6,14,2555,1997,5.00,2,0,NULL,0,NULL,'2022-09-20 02:50:18',0),(159,'202209201051052768',6,14,2555,1997,5.00,2,0,NULL,0,NULL,'2022-09-20 02:51:05',0),(160,'202209201254241175',6,14,2613,2085,1.50,2,1,'2022-09-20 12:54:29',1,'2022-09-20 12:54:50','2022-09-20 04:54:24',0),(161,'202209201254253565',6,14,2613,2085,1.50,2,0,NULL,0,NULL,'2022-09-20 04:54:25',0),(162,'202209201433426002',6,14,2608,1998,2.00,2,1,'2022-09-20 14:33:51',0,NULL,'2022-09-20 06:33:42',0),(163,'202209201609319737',6,14,2618,2088,5.00,2,0,NULL,0,NULL,'2022-09-20 08:09:31',0),(164,'202209201609414499',6,14,2618,2088,1.50,2,1,'2022-09-20 16:09:48',1,'2022-09-20 19:54:25','2022-09-20 08:09:41',0),(165,'202209201628113429',6,14,2609,2083,5.00,2,1,'2022-09-20 16:28:17',1,'2022-09-22 13:58:17','2022-09-20 08:28:11',0),(166,'202209201801352017',6,14,2618,2088,5.00,2,1,'2022-09-20 18:01:42',1,'2022-09-20 19:54:26','2022-09-20 10:01:35',0),(167,'202209202102202230',6,14,2578,2059,2.00,2,1,'2022-09-20 21:02:26',1,'2022-09-20 21:03:20','2022-09-20 13:02:20',0),(168,'202209202242094627',6,14,2722,1741,1.00,2,1,'2022-09-20 22:42:15',1,'2022-09-20 23:16:54','2022-09-20 14:42:09',0),(169,'202209211028098906',6,12,2754,1246,2.50,2,1,'2022-09-21 10:28:14',1,'2022-09-21 10:33:44','2022-09-21 02:28:09',0),(170,'202209211028091753',6,12,2754,1246,2.50,2,0,NULL,0,NULL,'2022-09-21 02:28:09',0),(171,'202209211121123166',6,12,2746,1840,10.00,2,1,'2022-09-21 11:21:19',1,'2022-09-21 19:30:20','2022-09-21 03:21:12',0),(172,'202209211148255716',6,12,2746,1840,15.00,2,1,'2022-09-21 11:48:37',1,'2022-09-21 19:30:21','2022-09-21 03:48:25',0),(173,'202209211148269287',6,12,2746,1840,15.00,2,0,NULL,0,NULL,'2022-09-21 03:48:26',0),(174,'202209211219311025',6,14,2793,2139,2.00,2,1,'2022-09-21 12:19:36',1,'2022-09-21 14:13:56','2022-09-21 04:19:31',0),(175,'202209211547241895',6,12,2797,1808,5.00,2,1,'2022-09-21 15:47:29',1,'2022-09-21 16:43:14','2022-09-21 07:47:24',0),(176,'202209211547248380',6,12,2797,1808,5.00,2,0,NULL,0,NULL,'2022-09-21 07:47:24',0),(177,'202209221053367664',6,12,2933,820,1.00,3,1,'2022-09-22 10:53:42',0,NULL,'2022-09-22 02:53:36',0),(178,'202209221053361547',6,12,2933,820,1.00,3,0,NULL,0,NULL,'2022-09-22 02:53:36',0),(179,'202209221053372060',6,12,2933,820,1.00,3,0,NULL,0,NULL,'2022-09-22 02:53:37',0),(180,'202209221127104927',6,14,2950,2199,7.00,2,1,'2022-09-22 11:27:16',0,NULL,'2022-09-22 03:27:10',0),(181,'202209221200071517',6,14,2958,1913,0.50,3,1,'2022-09-22 12:00:11',0,NULL,'2022-09-22 04:00:07',0),(182,'202209221215532521',6,14,2972,2117,4.00,2,0,NULL,0,NULL,'2022-09-22 04:15:53',0),(183,'202209221216015295',6,14,2972,2117,0.50,2,1,'2022-09-22 12:16:06',0,NULL,'2022-09-22 04:16:01',0),(184,'202209221839171165',6,12,3053,2241,1.00,3,1,'2022-09-22 18:39:25',0,NULL,'2022-09-22 10:39:17',0),(185,'202209231643364269',6,14,3180,2267,1.00,2,1,'2022-09-23 16:43:42',1,'2022-09-23 16:48:42','2022-09-23 08:43:36',0),(186,'202209231842263887',6,12,3204,820,1.00,2,1,'2022-09-23 18:42:32',1,'2022-09-24 12:25:26','2022-09-23 10:42:26',0),(187,'202209231842275601',6,12,3204,820,1.00,2,0,NULL,0,NULL,'2022-09-23 10:42:27',0),(188,'202209231928597362',6,12,3214,1885,1.00,2,1,'2022-09-23 19:29:04',1,'2022-09-23 19:29:24','2022-09-23 11:28:59',0),(189,'202209231929004677',6,12,3214,1885,1.00,2,0,NULL,0,NULL,'2022-09-23 11:29:00',0),(190,'202209232131525968',6,12,3219,2272,1.00,2,1,'2022-09-23 21:32:07',1,'2022-09-23 22:26:02','2022-09-23 13:31:52',0),(191,'202209232313557614',6,12,3226,2272,1.00,2,1,'2022-09-23 23:14:03',1,'2022-09-24 07:22:47','2022-09-23 15:13:55',0),(192,'202209241340585986',6,12,3119,1816,1.00,2,1,'2022-09-24 13:41:03',1,'2022-09-24 18:27:08','2022-09-24 05:40:58',0),(193,'202209241903462770',6,14,3310,2292,3.00,2,1,'2022-09-24 19:03:50',1,'2022-09-24 19:46:28','2022-09-24 11:03:46',0),(194,'202209251422254654',6,14,3338,2300,6.00,2,0,NULL,0,NULL,'2022-09-25 06:22:25',0),(195,'202209251422371544',6,14,3338,2300,4.00,2,1,'2022-09-25 14:22:44',0,NULL,'2022-09-25 06:22:37',0),(196,'202209251756221605',6,14,3314,2294,1.00,2,1,'2022-09-25 17:56:29',0,NULL,'2022-09-25 09:56:22',0),(197,'202209251757432582',6,14,3317,2294,1.00,2,1,'2022-09-25 17:57:50',0,NULL,'2022-09-25 09:57:43',0),(198,'202209251758029949',6,14,3316,2294,1.00,2,1,'2022-09-25 17:58:17',0,NULL,'2022-09-25 09:58:02',0),(199,'202209251758262289',6,14,3315,2294,1.00,2,0,NULL,0,NULL,'2022-09-25 09:58:26',0),(200,'202209251758287946',6,14,3315,2294,1.00,2,0,NULL,0,NULL,'2022-09-25 09:58:28',0),(201,'202209251758291092',6,14,3315,2294,1.00,2,0,NULL,0,NULL,'2022-09-25 09:58:29',0),(202,'202209251758378123',6,14,3315,2294,1.00,2,1,'2022-09-25 17:59:07',0,NULL,'2022-09-25 09:58:37',0),(203,'202209251931028532',6,14,3368,2311,0.01,3,0,NULL,0,NULL,'2022-09-25 11:31:02',0),(204,'202209251931041358',6,14,3368,2311,0.01,3,0,NULL,0,NULL,'2022-09-25 11:31:04',0),(205,'202209252029122988',6,12,3431,2241,1.00,2,1,'2022-09-25 20:29:17',1,'2022-09-27 21:38:24','2022-09-25 12:29:12',0),(206,'202209252145503906',6,14,3433,2045,3.00,2,0,NULL,0,NULL,'2022-09-25 13:45:50',0),(207,'202209252145509540',6,14,3433,2045,3.00,2,1,'2022-09-25 21:45:55',1,'2022-09-26 21:23:44','2022-09-25 13:45:50',0),(208,'202209260852006829',6,14,3438,2320,1.00,2,1,'2022-09-26 08:52:06',1,'2022-09-26 11:03:14','2022-09-26 00:52:00',0),(209,'202209261700538746',6,14,3543,1894,5.00,2,1,'2022-09-26 17:00:58',0,NULL,'2022-09-26 09:00:53',0),(210,'202209271211263882',6,14,3589,2377,2.00,2,0,NULL,0,NULL,'2022-09-27 04:11:26',0),(211,'202209271212359081',6,14,3589,2377,2.00,2,1,'2022-09-27 12:12:42',1,'2022-09-27 12:29:20','2022-09-27 04:12:35',0),(212,'202209271218321663',6,14,3573,2284,30.00,2,0,NULL,0,NULL,'2022-09-27 04:18:32',0),(213,'202209271218427921',6,14,3573,2284,5.00,2,1,'2022-09-27 12:18:49',1,'2022-09-27 15:54:14','2022-09-27 04:18:42',0),(214,'202209271448419904',6,12,3598,2381,1.00,2,1,'2022-09-27 14:48:47',0,NULL,'2022-09-27 06:48:41',0),(215,'202209271450418190',6,14,3581,2373,1.00,2,1,'2022-09-27 14:50:50',1,'2022-09-30 18:17:47','2022-09-27 06:50:41',0),(216,'202209271620017802',6,12,3613,2362,1.00,2,1,'2022-09-27 16:20:06',0,NULL,'2022-09-27 08:20:01',0),(217,'202209271622575162',6,12,3613,2362,0.50,2,0,NULL,0,NULL,'2022-09-27 08:22:57',0),(218,'202209271622578175',6,12,3613,2362,0.50,2,0,NULL,0,NULL,'2022-09-27 08:22:57',0),(219,'202209271622574533',6,12,3613,2362,0.50,2,0,NULL,0,NULL,'2022-09-27 08:22:57',0),(220,'202209271622584869',6,12,3613,2362,0.50,2,1,'2022-09-27 16:23:02',0,NULL,'2022-09-27 08:22:58',0),(221,'202209281059379207',6,12,3650,2402,2.00,2,1,'2022-09-28 10:59:43',1,'2022-09-28 11:42:26','2022-09-28 02:59:37',0),(222,'202209281533205424',6,14,3678,2413,5.00,2,0,NULL,0,NULL,'2022-09-28 07:33:20',0),(223,'202209281533267715',6,14,3678,2413,2.00,2,1,'2022-09-28 15:33:37',1,'2022-09-28 15:40:12','2022-09-28 07:33:26',0),(224,'202209281713518286',6,14,3673,2410,0.50,2,1,'2022-09-28 17:13:56',0,NULL,'2022-09-28 09:13:51',0),(225,'202209281714184097',6,14,3672,2410,0.50,2,0,NULL,0,NULL,'2022-09-28 09:14:18',0),(226,'202209281714388020',6,14,3672,2410,0.50,2,0,NULL,0,NULL,'2022-09-28 09:14:38',0),(227,'202209281714393606',6,14,3672,2410,0.50,2,0,NULL,0,NULL,'2022-09-28 09:14:39',0),(228,'202209282034078470',6,14,3672,2410,0.50,2,1,'2022-09-28 20:34:13',0,NULL,'2022-09-28 12:34:07',0),(229,'202209282034089927',6,14,3672,2410,0.50,2,0,NULL,0,NULL,'2022-09-28 12:34:08',0),(230,'202209282112048893',6,12,3712,2289,3.00,2,1,'2022-09-28 21:12:11',1,'2022-09-28 21:26:48','2022-09-28 13:12:04',0),(231,'202209291912055914',6,14,3769,1791,5.00,2,1,'2022-09-29 19:12:11',0,NULL,'2022-09-29 11:12:05',0),(232,'202209291957117016',6,14,3800,2433,2.00,2,0,NULL,0,NULL,'2022-09-29 11:57:11',0),(233,'202210011553075519',6,14,3863,2448,4.00,2,0,NULL,0,NULL,'2022-10-01 07:53:07',0),(234,'202210012020558802',6,14,3863,2448,1.50,2,1,'2022-10-01 20:21:00',1,'2022-10-01 20:21:19','2022-10-01 12:20:55',0),(235,'202210012020561209',6,14,3863,2448,1.50,2,0,NULL,0,NULL,'2022-10-01 12:20:56',0),(236,'202210041903214563',6,14,3970,2144,0.50,2,1,'2022-10-04 19:03:26',1,'2022-10-05 17:32:27','2022-10-04 11:03:21',0),(237,'202210061836517726',6,14,4034,1915,1.50,2,1,'2022-10-06 18:36:56',1,'2022-10-06 19:16:01','2022-10-06 10:36:51',0),(238,'202210081547086139',6,14,4109,683,2.00,2,1,'2022-10-08 15:47:14',1,'2022-10-08 15:47:29','2022-10-08 07:47:08',0),(239,'202210081813219916',6,14,4092,2208,1.00,3,0,NULL,0,NULL,'2022-10-08 10:13:21',0),(240,'202210081820335857',6,14,4092,2208,1.00,3,1,'2022-10-08 18:20:38',0,NULL,'2022-10-08 10:20:33',0),(241,'202210081903244733',6,14,4153,2516,10.00,2,1,'2022-10-08 19:03:29',0,NULL,'2022-10-08 11:03:24',0),(242,'202210090040029754',6,12,4107,1436,1.00,2,1,'2022-10-09 00:40:09',0,NULL,'2022-10-08 16:40:02',0),(243,'202210091551133415',6,14,4161,1830,0.50,2,1,'2022-10-09 15:51:18',0,NULL,'2022-10-09 07:51:13',0),(244,'202210091918389333',6,14,4209,2634,2.00,2,1,'2022-10-09 19:18:44',0,NULL,'2022-10-09 11:18:38',0),(245,'202210101315107159',6,14,4270,2690,1.50,2,0,NULL,0,NULL,'2022-10-10 05:15:10',0),(246,'202210101315103992',6,14,4270,2690,1.50,2,0,NULL,0,NULL,'2022-10-10 05:15:10',0),(247,'202210101315108069',6,14,4270,2690,1.50,2,1,'2022-10-10 13:15:16',0,NULL,'2022-10-10 05:15:10',0),(248,'202210101546513929',6,14,4180,1447,1.00,2,1,'2022-10-10 15:46:56',0,NULL,'2022-10-10 07:46:51',0),(249,'202210102116266695',6,14,4326,2752,5.00,2,1,'2022-10-10 21:16:32',0,NULL,'2022-10-10 13:16:26',0),(250,'202210110809597065',6,12,4236,2030,2.00,2,1,'2022-10-11 08:10:06',0,NULL,'2022-10-11 00:09:59',0),(251,'202210110809595782',6,12,4236,2030,2.00,2,0,NULL,0,NULL,'2022-10-11 00:09:59',0),(252,'202210110810007671',6,12,4236,2030,2.00,2,0,NULL,0,NULL,'2022-10-11 00:10:00',0),(253,'202210111139304775',6,13,4355,2840,1.00,7,1,'2022-10-11 11:39:36',0,NULL,'2022-10-11 03:39:30',0),(254,'202210121500469655',6,13,4511,2533,1.50,2,0,NULL,0,NULL,'2022-10-12 07:00:46',0),(255,'202210132049352297',6,13,4676,3527,1.00,3,1,'2022-10-13 20:49:40',0,NULL,'2022-10-13 12:49:35',0),(256,'202210141900149936',6,13,4793,3543,0.50,3,0,NULL,0,NULL,'2022-10-14 11:00:14',0),(257,'202210151145079384',6,13,4825,3384,1.00,3,1,'2022-10-15 11:45:12',0,NULL,'2022-10-15 03:45:07',0),(258,'202210151558367315',6,13,4866,2707,0.50,2,1,'2022-10-15 15:58:41',0,NULL,'2022-10-15 07:58:36',0),(259,'202210151929192716',6,13,4908,2608,1.00,2,1,'2022-10-15 19:29:26',0,NULL,'2022-10-15 11:29:19',0),(260,'202210151929214960',6,13,4908,2608,1.00,2,1,'2022-10-15 19:29:41',0,NULL,'2022-10-15 11:29:21',0),(261,'202210151955068986',6,13,4918,4016,0.50,2,1,'2022-10-15 19:55:14',0,NULL,'2022-10-15 11:55:06',0),(262,'202210161204012826',6,12,4943,4044,1.00,2,1,'2022-10-16 12:04:07',0,NULL,'2022-10-16 04:04:01',0),(263,'202210161821285225',6,13,5024,3721,2.00,3,1,'2022-10-16 18:21:34',0,NULL,'2022-10-16 10:21:28',0),(264,'202210162048265102',6,12,5044,4205,3.00,2,0,NULL,0,NULL,'2022-10-16 12:48:26',0),(265,'202210162048269108',6,12,5044,4205,3.00,2,0,NULL,0,NULL,'2022-10-16 12:48:26',0),(266,'202210162048444424',6,12,5044,4205,1.00,2,1,'2022-10-16 20:48:50',0,NULL,'2022-10-16 12:48:44',0),(267,'202210162112105298',6,13,5050,3386,1.50,3,1,'2022-10-16 21:12:15',0,NULL,'2022-10-16 13:12:10',0),(268,'202210162112113404',6,13,5050,3386,1.50,3,0,NULL,0,NULL,'2022-10-16 13:12:11',0),(269,'202210172116493107',6,13,5130,3663,1.50,3,1,'2022-10-17 21:16:55',0,NULL,'2022-10-17 13:16:49',0),(270,'202210181436311126',6,13,5177,4370,2.00,2,1,'2022-10-18 14:36:38',0,NULL,'2022-10-18 06:36:31',0),(271,'202210181532153564',6,12,5188,4376,1.00,3,0,NULL,0,NULL,'2022-10-18 07:32:15',0),(272,'202210181702515790',6,12,5188,4376,4.00,3,1,'2022-10-18 17:02:57',0,NULL,'2022-10-18 09:02:51',0),(273,'202210181702522485',6,12,5188,4376,4.00,3,1,'2022-10-18 17:03:04',0,NULL,'2022-10-18 09:02:52',0),(274,'202210190910176479',6,14,5261,1894,3.00,2,1,'2022-10-19 09:10:23',0,NULL,'2022-10-19 01:10:17',0),(275,'202210191850481891',6,14,5232,4394,1.00,3,1,'2022-10-19 18:50:53',0,NULL,'2022-10-19 10:50:48',0),(276,'202210191850488667',6,14,5232,4394,1.00,3,0,NULL,0,NULL,'2022-10-19 10:50:48',0),(277,'202210201305058994',6,12,5382,4461,1.00,3,0,NULL,0,NULL,'2022-10-20 05:05:05',0),(278,'202210201357023481',6,14,5388,4464,5.00,2,0,NULL,0,NULL,'2022-10-20 05:57:02',0),(279,'202210201357074055',6,14,5388,4464,1.50,2,1,'2022-10-20 13:57:13',0,NULL,'2022-10-20 05:57:07',0),(280,'202210211358281826',6,13,5464,3095,4.50,3,1,'2022-10-21 13:58:34',0,NULL,'2022-10-21 05:58:28',0),(281,'202210211444198282',6,13,5473,3623,5.00,2,0,NULL,0,NULL,'2022-10-21 06:44:19',0),(282,'202210211444278999',6,13,5473,3623,4.00,2,1,'2022-10-21 14:44:32',0,NULL,'2022-10-21 06:44:27',0),(283,'202210211624317559',6,12,5493,4511,1.00,2,1,'2022-10-21 16:24:38',0,NULL,'2022-10-21 08:24:31',0),(284,'202210211822083425',6,13,5510,4521,2.50,3,1,'2022-10-21 18:22:13',0,NULL,'2022-10-21 10:22:08',0),(285,'202210211822092502',6,13,5510,4521,2.50,3,0,NULL,0,NULL,'2022-10-21 10:22:09',0),(286,'202210212007158127',6,13,5530,3233,1.00,3,1,'2022-10-21 20:07:23',0,NULL,'2022-10-21 12:07:15',0),(287,'202210212015215031',6,13,5532,2754,0.01,3,1,'2022-10-21 20:15:28',0,NULL,'2022-10-21 12:15:21',0),(288,'202210221135013581',6,12,5559,4548,3.00,2,1,'2022-10-22 11:35:09',0,NULL,'2022-10-22 03:35:01',0),(289,'202210221900316143',6,13,5621,3008,3.00,3,1,'2022-10-22 19:00:36',0,NULL,'2022-10-22 11:00:31',0),(290,'202210221900319778',6,13,5621,3008,3.00,3,0,NULL,0,NULL,'2022-10-22 11:00:31',0),(291,'202210231547201664',6,14,5676,4364,5.50,3,0,NULL,0,NULL,'2022-10-23 07:47:20',0),(292,'202210231547329627',6,14,5676,4364,2.00,3,1,'2022-10-23 15:47:36',0,NULL,'2022-10-23 07:47:32',0),(293,'202210231658561814',6,13,5698,4480,2.00,3,1,'2022-10-23 16:59:04',0,NULL,'2022-10-23 08:58:56',0),(294,'202210231756091101',6,13,5718,4591,0.50,2,1,'2022-10-23 17:56:15',0,NULL,'2022-10-23 09:56:09',0),(295,'202210231756101271',6,13,5718,4591,0.50,2,0,NULL,0,NULL,'2022-10-23 09:56:10',0),(296,'202210240922585664',6,12,5752,4421,1.50,2,1,'2022-10-24 09:23:03',0,NULL,'2022-10-24 01:22:58',0),(297,'202210242046385562',6,13,5829,4641,0.50,7,1,'2022-10-24 20:46:44',0,NULL,'2022-10-24 12:46:38',0),(298,'202210251248103023',6,13,5857,3851,0.27,2,1,'2022-10-25 12:48:15',0,NULL,'2022-10-25 04:48:10',0),(299,'202210261628108729',6,13,5981,4688,1.00,2,0,NULL,0,NULL,'2022-10-26 08:28:10',0),(300,'202210262043201542',6,13,6017,3551,2.00,3,1,'2022-10-26 20:43:26',0,NULL,'2022-10-26 12:43:20',0),(301,'202210271556036748',6,13,6051,4436,1.00,3,1,'2022-10-27 15:56:08',0,NULL,'2022-10-27 07:56:03',0),(302,'202210271556037064',6,13,6051,4436,1.00,3,0,NULL,0,NULL,'2022-10-27 07:56:03',0),(303,'202210271610045113',6,13,6095,3287,1.00,3,1,'2022-10-27 16:10:09',0,NULL,'2022-10-27 08:10:04',0),(304,'202210271728005640',6,14,5969,2511,2.50,3,1,'2022-10-27 17:28:06',0,NULL,'2022-10-27 09:28:00',0),(305,'202210271757144066',6,13,6101,4614,1.00,3,0,NULL,0,NULL,'2022-10-27 09:57:14',0),(306,'202210271757154200',6,13,6101,4614,1.00,3,0,NULL,0,NULL,'2022-10-27 09:57:15',0),(307,'202210272103029291',6,14,6084,1074,2.00,3,1,'2022-10-27 21:03:07',0,NULL,'2022-10-27 13:03:02',0),(308,'202210281631102375',6,13,6209,2637,1.50,2,1,'2022-10-28 16:31:17',0,NULL,'2022-10-28 08:31:10',0),(309,'202210281631111010',6,13,6209,2637,1.50,2,1,'2022-10-28 16:31:32',0,NULL,'2022-10-28 08:31:11',0),(310,'202210281811334617',6,13,6224,4810,0.50,2,1,'2022-10-28 18:11:39',0,NULL,'2022-10-28 10:11:33',0),(311,'202210281811342164',6,13,6224,4810,0.50,2,0,NULL,0,NULL,'2022-10-28 10:11:34',0),(312,'202210291906483497',6,13,6360,4874,8.00,3,1,'2022-10-29 19:06:53',0,NULL,'2022-10-29 11:06:48',0),(313,'202210301041015832',6,13,6417,4040,0.50,2,1,'2022-10-30 10:41:07',0,NULL,'2022-10-30 02:41:01',0),(314,'202210301136097602',6,13,6417,4040,0.50,2,0,NULL,0,NULL,'2022-10-30 03:36:09',0),(315,'202210301136109987',6,13,6417,4040,0.50,2,1,'2022-10-30 11:36:15',0,NULL,'2022-10-30 03:36:10',0),(316,'202210301936377994',6,13,6524,3851,0.50,2,1,'2022-10-30 19:36:42',0,NULL,'2022-10-30 11:36:37',0),(317,'202210302059594108',6,13,6541,4953,1.00,3,1,'2022-10-30 21:00:04',0,NULL,'2022-10-30 12:59:59',0),(318,'202210302100006258',6,13,6541,4953,1.00,3,0,NULL,0,NULL,'2022-10-30 13:00:00',0),(319,'202210312109117365',6,13,6695,2637,1.00,2,1,'2022-10-31 21:09:17',0,NULL,'2022-10-31 13:09:11',0),(320,'202210312109122421',6,13,6695,2637,1.00,2,0,NULL,0,NULL,'2022-10-31 13:09:12',0),(321,'202210312123537059',6,13,6700,2942,1.00,2,1,'2022-10-31 21:23:58',0,NULL,'2022-10-31 13:23:53',0),(322,'202211010855211960',6,14,6701,1805,2.00,2,1,'2022-11-01 08:55:26',0,NULL,'2022-11-01 00:55:21',0),(323,'202211010855228757',6,14,6701,1805,2.00,2,0,NULL,0,NULL,'2022-11-01 00:55:22',0),(324,'202211011525592166',6,13,6760,5157,0.50,3,1,'2022-11-01 15:26:05',0,NULL,'2022-11-01 07:25:59',0),(325,'202211011716129489',6,12,6809,1615,2.00,3,0,NULL,0,NULL,'2022-11-01 09:16:12',0),(326,'202211011716419142',6,12,6809,1615,4.00,3,1,'2022-11-01 17:16:51',0,NULL,'2022-11-01 09:16:41',0),(327,'202211011804279081',6,12,6772,820,2.00,3,1,'2022-11-01 18:04:32',0,NULL,'2022-11-01 10:04:27',0),(328,'202211011804272480',6,12,6772,820,2.00,3,0,NULL,0,NULL,'2022-11-01 10:04:27',0),(329,'202211012304434282',6,13,6869,4012,5.00,2,0,NULL,0,NULL,'2022-11-01 15:04:43',0),(330,'202211021144572986',6,14,6903,2193,1.00,2,0,NULL,0,NULL,'2022-11-02 03:44:57',0),(331,'202211021145106263',6,14,6903,2193,1.00,2,1,'2022-11-02 11:45:15',0,NULL,'2022-11-02 03:45:10',0),(332,'202211021425017359',6,14,6967,5240,2.00,2,1,'2022-11-02 14:25:06',0,NULL,'2022-11-02 06:25:01',0),(333,'202211021601437645',6,13,7000,5238,1.00,3,1,'2022-11-02 16:01:50',0,NULL,'2022-11-02 08:01:43',0),(334,'202211021624443618',6,14,7031,558,2.00,2,0,NULL,0,NULL,'2022-11-02 08:24:44',0),(335,'202211021641353254',6,13,7037,4308,0.50,3,1,'2022-11-02 16:41:40',0,NULL,'2022-11-02 08:41:35',0),(336,'202211021747178609',6,14,7098,1773,2.00,2,1,'2022-11-02 17:47:22',0,NULL,'2022-11-02 09:47:17',0),(337,'202211022056121630',6,13,7142,4824,1.00,2,1,'2022-11-02 20:56:18',0,NULL,'2022-11-02 12:56:12',0),(338,'202211022135231840',6,13,7134,2601,5.00,2,0,NULL,0,NULL,'2022-11-02 13:35:23',0),(339,'202211031056373703',6,12,7162,4637,0.05,3,0,NULL,0,NULL,'2022-11-03 02:56:37',0),(340,'202211031447217392',6,14,7261,638,1.00,2,1,'2022-11-03 14:47:28',0,NULL,'2022-11-03 06:47:21',0),(341,'202211031606375269',6,14,7225,4395,5.50,3,0,NULL,0,NULL,'2022-11-03 08:06:37',0),(342,'202211031606444108',6,14,7225,4395,3.00,3,1,'2022-11-03 16:06:54',0,NULL,'2022-11-03 08:06:44',0),(343,'202211031716144805',6,13,7340,3980,1.50,3,1,'2022-11-03 17:16:20',0,NULL,'2022-11-03 09:16:14',0),(344,'202211031900417656',6,14,7375,5338,2.00,2,0,NULL,0,NULL,'2022-11-03 11:00:41',0),(345,'202211031900411362',6,14,7375,5338,2.00,2,0,NULL,0,NULL,'2022-11-03 11:00:41',0),(346,'202211031900418035',6,14,7375,5338,2.00,2,0,NULL,0,NULL,'2022-11-03 11:00:41',0),(347,'202211031900419459',6,14,7375,5338,2.00,2,1,'2022-11-03 19:00:48',0,NULL,'2022-11-03 11:00:41',0),(348,'202211031900413824',6,14,7375,5338,2.00,2,0,NULL,0,NULL,'2022-11-03 11:00:41',0),(349,'202211031957505775',6,13,7394,2589,1.50,3,1,'2022-11-03 19:57:56',0,NULL,'2022-11-03 11:57:50',0),(350,'202211032000387875',6,13,7401,5428,1.50,3,1,'2022-11-03 20:00:43',0,NULL,'2022-11-03 12:00:38',0),(351,'202211032001561197',6,13,7158,4173,0.50,3,1,'2022-11-03 20:02:02',0,NULL,'2022-11-03 12:01:56',0),(352,'202211032139088461',6,13,7424,4294,0.50,2,0,NULL,0,NULL,'2022-11-03 13:39:08',0),(353,'202211032139176959',6,13,7424,4294,0.89,2,1,'2022-11-03 21:39:23',0,NULL,'2022-11-03 13:39:17',0),(354,'202211032200331135',6,13,7425,3224,0.50,2,0,NULL,0,NULL,'2022-11-03 14:00:33',0),(355,'202211032214318164',6,13,7425,3224,0.50,2,1,'2022-11-03 22:14:37',0,NULL,'2022-11-03 14:14:31',0),(356,'202211041411466449',6,13,7498,2674,5.00,3,1,'2022-11-04 14:11:53',0,NULL,'2022-11-04 06:11:46',0),(357,'202211041415115051',6,13,7498,2674,2.00,3,0,NULL,0,NULL,'2022-11-04 06:15:11',0),(358,'202211041415113835',6,13,7498,2674,2.00,3,1,'2022-11-04 14:15:21',0,NULL,'2022-11-04 06:15:11',0),(359,'202211041714336764',6,13,7620,4953,2.00,3,1,'2022-11-04 17:14:39',0,NULL,'2022-11-04 09:14:33',0),(360,'202211041756152616',6,13,7660,3198,1.50,3,1,'2022-11-04 17:56:23',0,NULL,'2022-11-04 09:56:15',0),(361,'202211041938554337',6,13,7727,4868,2.00,3,0,NULL,0,NULL,'2022-11-04 11:38:55',0),(362,'202211041939002133',6,13,7727,4868,1.00,3,1,'2022-11-04 19:39:06',0,NULL,'2022-11-04 11:39:00',0),(363,'202211042032151065',6,13,7696,4294,2.50,3,1,'2022-11-04 20:32:20',0,NULL,'2022-11-04 12:32:15',0),(364,'202211051426595569',6,13,7807,5507,2.00,3,0,NULL,0,NULL,'2022-11-05 06:26:59',0),(365,'202211051427003745',6,13,7807,5507,2.00,3,1,'2022-11-05 14:27:04',0,NULL,'2022-11-05 06:27:00',0),(366,'202211051440166444',6,13,7829,2835,1.00,3,1,'2022-11-05 14:40:22',0,NULL,'2022-11-05 06:40:16',0),(367,'202211051440173914',6,13,7829,2835,1.00,3,0,NULL,0,NULL,'2022-11-05 06:40:17',0),(368,'202211051556253364',6,13,7854,4683,2.00,3,1,'2022-11-05 15:56:38',0,NULL,'2022-11-05 07:56:25',0),(369,'202211051556305392',6,13,7854,4683,2.00,3,0,NULL,0,NULL,'2022-11-05 07:56:30',0),(370,'202211051556302735',6,13,7854,4683,2.00,3,0,NULL,0,NULL,'2022-11-05 07:56:30',0),(371,'202211051556305354',6,13,7854,4683,2.00,3,0,NULL,0,NULL,'2022-11-05 07:56:30',0),(372,'202211051556306951',6,13,7854,4683,2.00,3,0,NULL,0,NULL,'2022-11-05 07:56:30',0),(373,'202211051558379102',6,13,7854,4683,2.00,3,0,NULL,0,NULL,'2022-11-05 07:58:37',0),(374,'202211051558385576',6,13,7854,4683,2.00,3,1,'2022-11-05 15:58:43',0,NULL,'2022-11-05 07:58:38',0),(375,'202211051601082973',6,13,7857,4020,1.50,3,1,'2022-11-05 16:01:16',0,NULL,'2022-11-05 08:01:08',0),(376,'202211051713005578',6,13,7884,3851,1.00,3,1,'2022-11-05 17:13:07',0,NULL,'2022-11-05 09:13:00',0),(377,'202211051820128859',6,13,7922,2995,1.00,3,1,'2022-11-05 18:20:18',0,NULL,'2022-11-05 10:20:12',0),(378,'202211051909411281',6,13,7946,4866,1.00,2,0,NULL,0,NULL,'2022-11-05 11:09:41',0),(379,'202211052049193704',6,13,7946,4866,2.00,3,0,NULL,0,NULL,'2022-11-05 12:49:19',0),(380,'202211052049194934',6,13,7946,4866,2.00,3,0,NULL,0,NULL,'2022-11-05 12:49:19',0),(381,'202211052049195017',6,13,7946,4866,2.00,3,1,'2022-11-05 20:49:42',0,NULL,'2022-11-05 12:49:19',0),(382,'202211052058221975',6,13,7969,3202,1.50,3,0,NULL,0,NULL,'2022-11-05 12:58:22',0),(383,'202211052058584539',6,13,7979,2979,0.50,2,1,'2022-11-05 20:59:04',0,NULL,'2022-11-05 12:58:58',0),(384,'202211052059359807',6,13,7969,3202,1.50,3,1,'2022-11-05 21:00:53',0,NULL,'2022-11-05 12:59:35',0),(385,'202211061040054066',6,13,7987,3663,2.00,3,1,'2022-11-06 10:40:10',0,NULL,'2022-11-06 02:40:05',0),(386,'202211061557199624',6,13,8101,5505,1.50,3,1,'2022-11-06 15:57:28',0,NULL,'2022-11-06 07:57:19',0),(387,'202211061636362521',6,13,8136,4572,2.00,3,1,'2022-11-06 16:36:43',0,NULL,'2022-11-06 08:36:36',0),(388,'202211061746269469',6,13,8172,4399,1.00,3,0,NULL,0,NULL,'2022-11-06 09:46:26',0);
/*!40000 ALTER TABLE `gc_dmh_school_order_plus_price` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_dmh_school_orders`
--

DROP TABLE IF EXISTS `gc_dmh_school_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_dmh_school_orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `s_id` varchar(250) DEFAULT NULL COMMENT '学校id',
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `status` tinyint(4) DEFAULT '1' COMMENT '订单的完成状态    未支付|1,待接单|2,待取货|3,到送达|7,已完成|4,已过期|5,未完成|6,已取消|8,等待取消抢单|9',
  `img` varchar(250) DEFAULT NULL COMMENT '图片',
  `ordersn` varchar(250) DEFAULT NULL COMMENT '订单号',
  `goods_id` varchar(250) DEFAULT NULL COMMENT '商品id',
  `type` smallint(6) DEFAULT NULL COMMENT '订单类型   取件|1,寄件|2,超市食堂|3,无所不能/饮品|4',
  `remarks` varchar(250) DEFAULT NULL COMMENT '订单备注',
  `attach_file` varchar(250) DEFAULT NULL COMMENT '附件地址',
  `sex_limit` smallint(6) DEFAULT NULL COMMENT '接单员性别限制',
  `weight` varchar(250) DEFAULT NULL COMMENT '物品重量',
  `express_num` int(11) DEFAULT NULL COMMENT '件数',
  `start_time` int(11) DEFAULT NULL COMMENT '开始时间',
  `door_time` int(11) DEFAULT NULL COMMENT '预计上门时间',
  `start_openid` varchar(250) DEFAULT NULL COMMENT '发起用户openid',
  `end_openid` varchar(250) DEFAULT NULL COMMENT '抢单用户openid',
  `sh_name` varchar(250) DEFAULT NULL COMMENT '收获姓名',
  `sh_sex` smallint(6) DEFAULT NULL COMMENT '收货性别',
  `sh_phone` varchar(250) DEFAULT NULL COMMENT '收获联系手机号',
  `sh_school` varchar(250) DEFAULT NULL COMMENT '收获学校',
  `sh_addres` varchar(250) DEFAULT NULL COMMENT '具体收货地址',
  `service_num` int(11) DEFAULT NULL COMMENT '服务人数',
  `sh_longitude` varchar(250) DEFAULT NULL COMMENT '收货经度参数',
  `sh_latitude` varchar(250) DEFAULT NULL COMMENT '收货纬度参数',
  `qu_addres` varchar(250) DEFAULT NULL COMMENT '取货具体地址',
  `qu_longitude` varchar(250) DEFAULT NULL COMMENT '取货经度参数',
  `qu_latitude` varchar(250) DEFAULT NULL COMMENT '取货纬度参数',
  `co_id` varchar(250) DEFAULT NULL COMMENT '优惠券id',
  `co_name` varchar(250) DEFAULT NULL COMMENT '名称',
  `guess_price` varchar(250) DEFAULT NULL COMMENT '商品预估价',
  `store_id` varchar(250) DEFAULT NULL COMMENT '商家id',
  `y_money` decimal(10,2) DEFAULT NULL COMMENT '优惠券金额',
  `total` decimal(10,2) DEFAULT NULL COMMENT '总价（跑腿费）',
  `t_money` decimal(10,2) DEFAULT NULL COMMENT '实付金额',
  `s_money` decimal(10,2) DEFAULT NULL COMMENT '跑腿被抽取的手续费',
  `fxs_money` decimal(10,2) DEFAULT NULL COMMENT '学校收取手续费',
  `store_money` decimal(10,2) DEFAULT NULL COMMENT '商家抽成费用',
  `food_money` decimal(10,2) DEFAULT NULL COMMENT '商品价格',
  `createtime` int(11) DEFAULT NULL COMMENT '创建时间',
  `updatetime` int(11) DEFAULT NULL COMMENT '更新时间',
  `out_time` int(11) DEFAULT NULL COMMENT '订单过期时间',
  `cancel_time` int(11) DEFAULT NULL COMMENT '取消时间',
  `out_time_num` int(11) DEFAULT NULL COMMENT '超时',
  `good_details` tinytext COMMENT '商品详情',
  `cancel_from` varchar(250) DEFAULT NULL COMMENT '取消抢单来自哪一方:user:下单者,rider:骑手',
  `refuse_reason` varchar(250) DEFAULT NULL COMMENT '拒绝原因',
  `proof` varchar(250) DEFAULT NULL COMMENT '凭证',
  `is_refuse` int(11) DEFAULT NULL COMMENT '是否拒绝',
  `title` varchar(250) DEFAULT NULL COMMENT '标题',
  `is_start_show` int(11) DEFAULT NULL COMMENT '开始时间是否显示',
  `qu_phone` varchar(20) DEFAULT NULL COMMENT '寄件取货联系电话',
  `qu_name` varchar(250) DEFAULT NULL COMMENT '寄件取货姓名',
  `qu_sex` tinyint(4) DEFAULT NULL COMMENT '寄件 取货  性别 ',
  `pay_time` int(11) DEFAULT NULL COMMENT '用户支付时间',
  `cancel_reason` varchar(250) DEFAULT NULL COMMENT '取消原因',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_dmh_school_orders`
--

LOCK TABLES `gc_dmh_school_orders` WRITE;
/*!40000 ALTER TABLE `gc_dmh_school_orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_dmh_school_orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_dmh_settled`
--

DROP TABLE IF EXISTS `gc_dmh_settled`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_dmh_settled` (
  `d_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) DEFAULT NULL COMMENT '名称',
  `phone` varchar(250) DEFAULT NULL COMMENT '手机号',
  `longitude` varchar(250) DEFAULT NULL COMMENT '经度',
  `latitude` varchar(250) DEFAULT NULL COMMENT '纬度',
  `address` varchar(250) DEFAULT NULL COMMENT '地址',
  `image` varchar(250) DEFAULT NULL COMMENT '店铺门头',
  `type_id` int(11) DEFAULT NULL COMMENT '商家分类',
  `start` varchar(250) DEFAULT NULL COMMENT '开始时间',
  `end` varchar(250) DEFAULT NULL COMMENT '结束时间',
  `qualifications` varchar(250) DEFAULT NULL COMMENT '店铺资质',
  `state` smallint(6) DEFAULT NULL COMMENT '状态',
  `createtime` int(11) DEFAULT NULL COMMENT '创建时间',
  `updatetime` int(11) DEFAULT NULL COMMENT '修改时间',
  `openid` varchar(250) DEFAULT NULL COMMENT '绑定用户',
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `s_id` varchar(250) DEFAULT NULL COMMENT '学校id',
  `paystate` tinyint(4) DEFAULT '0' COMMENT '支付状态',
  `paytime` int(11) DEFAULT NULL COMMENT '支付时间',
  `ordersn` varchar(250) DEFAULT NULL COMMENT '订单号',
  `u_id` int(11) DEFAULT NULL COMMENT '用户id',
  `pay` decimal(10,2) DEFAULT NULL COMMENT '支付金额',
  `pay_type` int(11) DEFAULT '0' COMMENT '付款方式 0微信 1翼支付',
  PRIMARY KEY (`d_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_dmh_settled`
--

LOCK TABLES `gc_dmh_settled` WRITE;
/*!40000 ALTER TABLE `gc_dmh_settled` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_dmh_settled` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_dmh_student`
--

DROP TABLE IF EXISTS `gc_dmh_student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_dmh_student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) DEFAULT NULL COMMENT '姓名',
  `phone` varchar(250) DEFAULT NULL COMMENT '手机号',
  `remarks` varchar(250) DEFAULT NULL COMMENT '备注',
  `student` varchar(250) DEFAULT NULL COMMENT '学号',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `images` varchar(250) DEFAULT NULL COMMENT '照片',
  `u_id` int(11) DEFAULT NULL COMMENT '用户id',
  `s_id` varchar(250) DEFAULT NULL COMMENT '学校',
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `state` smallint(6) DEFAULT NULL COMMENT '状态',
  `reason` varchar(250) DEFAULT NULL COMMENT '拒绝原因',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_dmh_student`
--

LOCK TABLES `gc_dmh_student` WRITE;
/*!40000 ALTER TABLE `gc_dmh_student` DISABLE KEYS */;
INSERT INTO `gc_dmh_student` VALUES (1,'陈小硕','18825641807','','0018',1658565623,'https://cdn.lansu.net.cn/api/202207/202207231640190270496.jpg',457,'14','6',0,NULL),(2,'徐广','18825641807','6','431102200206130025',0,'https://cdn.lansu.net.cn/api/202209/202209070010370201846.jpg',349,'14','6',1,''),(3,'赵依林','13538026272','','',1662979017,'https://cdn.lansu.net.cn/api/202209/202209121836530278974.jpg',1544,'14','6',0,NULL);
/*!40000 ALTER TABLE `gc_dmh_student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_dmh_topic`
--

DROP TABLE IF EXISTS `gc_dmh_topic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_dmh_topic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `s_id` varchar(250) DEFAULT NULL COMMENT '学校id',
  `title` varchar(250) DEFAULT NULL COMMENT '话题',
  `addtime` int(11) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_dmh_topic`
--

LOCK TABLES `gc_dmh_topic` WRITE;
/*!40000 ALTER TABLE `gc_dmh_topic` DISABLE KEYS */;
INSERT INTO `gc_dmh_topic` VALUES (1,'6','14','帮帮代取事宜',1661708842),(2,'6','12','快递代取',1661750214),(3,'6','14','捞人',1662137203),(4,'6','14','商家吐槽',1662137212),(5,'6','14','心事诉说',1662137226),(6,'6','14','各种找代',1662137321),(7,'6','14','游戏组局',1662137347),(8,'6','14','疑问求解',1662137378),(9,'6','14','热门大瓜',1662137389),(10,'6','13','快递代取',1662449037),(11,'6','12','大学军训',1662515504),(12,'6','12','新生生活',1662515516),(13,'6','17','快递代取',1664084330),(14,'6','17','大学生活',1664084336);
/*!40000 ALTER TABLE `gc_dmh_topic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_express_specs`
--

DROP TABLE IF EXISTS `gc_express_specs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_express_specs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `s_id` varchar(250) DEFAULT NULL COMMENT '学校id',
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `name` varchar(250) DEFAULT NULL COMMENT '名称',
  `price` decimal(10,2) DEFAULT NULL COMMENT '价格',
  `createtime` int(11) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_express_specs`
--

LOCK TABLES `gc_express_specs` WRITE;
/*!40000 ALTER TABLE `gc_express_specs` DISABLE KEYS */;
INSERT INTO `gc_express_specs` VALUES (13,'12','6','超小件（挂件，手机壳等大小包装）',2.00,1662278952),(14,'12','6','小件（衣服，盒子等大小包装）',3.50,1662279045),(15,'12','6','中件（鞋盒，牛奶等大小包装）',5.50,1662279144),(16,'12','6','大件（纸巾箱，洗衣液等大小包装）',8.00,1662279194),(17,'12','6','中大件（行李箱，桌子等大小包装）',15.00,1662279268),(18,'12','6','超大件（15KG以上联系客服下单）',99999.00,1662279331),(19,'17','6','超小件(挂件，手机壳等大小包装)',2.00,1663469200),(20,'17','6','小件(衣服，盒子等大小包装)',3.50,1663469227),(21,'17','6','中件(鞋盒，牛奶等大小包装)',5.50,1663469264),(22,'17','6','大件(纸巾箱，洗衣液等大小包装)',8.00,1663469296),(23,'17','6','中大件(行李箱，桌子等大小包装)',15.00,1663483576),(24,'17','6','超大件(15KG以上联系客服下单)',9999.00,1663483607),(26,'13','6','小件(衣服等大小包装)',1.50,1664182655),(27,'13','6','中小件(盒子等大小包装)',2.00,1664182859),(28,'13','6','中大件(牛奶，泡面等大小包装)',3.00,1664182894),(29,'13','6','大件(纸巾箱，洗衣液等大小包装)',4.50,1664182919),(30,'13','6','超大件(行李箱，桌子等大小包装)',8.00,1664182953),(31,'13','6','超大件(15KG以上联系客服下单)',9999.00,1664182979),(32,'13','6','超小件（手机壳，充电线等大小包装）',1.00,1665411997),(35,'13','6','洗衣机等超大件物品',23.00,1665648362),(36,'13','6','洗衣机（在校门口）',26.00,1665648760),(37,'13','6','中大件（鞋子等中大件物品）',2.50,1665926236),(39,'14','6','会员迷你件（小袋子小盒子）',1.50,1667324850),(40,'14','6','会员小件',2.50,1667324874),(41,'14','6','会员中件',5.50,1667324888),(42,'14','6','会员大件',10.00,1667324904),(43,'14','6','会员首月1元小件代取',1.00,1667324942),(49,'14','6','校内菜鸟驿站小件',1.00,1667584611);
/*!40000 ALTER TABLE `gc_express_specs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_field`
--

DROP TABLE IF EXISTS `gc_field`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_field` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `menu_id` int(11) NOT NULL COMMENT '模块ID',
  `name` varchar(64) NOT NULL COMMENT '字段名称',
  `field` varchar(32) NOT NULL,
  `type` smallint(6) NOT NULL COMMENT '表单类型1输入框 2下拉框 3单选框 4多选框 5上传图片 6编辑器 7时间',
  `list_show` tinyint(4) DEFAULT NULL COMMENT '列表显示',
  `search_show` tinyint(4) DEFAULT NULL COMMENT '搜索显示',
  `search_type` tinyint(4) DEFAULT NULL COMMENT '1精确匹配 2模糊搜索',
  `config` varchar(255) DEFAULT NULL COMMENT '下拉框或者单选框配置',
  `is_post` tinyint(4) DEFAULT NULL COMMENT '是否前台录入',
  `is_field` tinyint(4) DEFAULT NULL,
  `align` varchar(24) DEFAULT NULL COMMENT '表格显示位置',
  `note` varchar(255) DEFAULT NULL COMMENT '提示信息',
  `message` varchar(255) DEFAULT NULL COMMENT '错误提示',
  `validate` varchar(32) DEFAULT NULL COMMENT '验证方式',
  `rule` mediumtext COMMENT '验证规则',
  `sortid` mediumint(9) DEFAULT '0' COMMENT '排序号',
  `sql` varchar(255) DEFAULT NULL COMMENT '字段配置数据源sql',
  `tab_menu_name` varchar(30) DEFAULT NULL COMMENT '所属选项卡名称',
  `default_value` varchar(255) DEFAULT NULL,
  `datatype` varchar(32) DEFAULT NULL COMMENT '字段数据类型',
  `length` varchar(5) DEFAULT NULL COMMENT '字段长度',
  `indexdata` varchar(20) DEFAULT NULL COMMENT '索引',
  PRIMARY KEY (`id`),
  KEY `menu_id` (`menu_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4000 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_field`
--

LOCK TABLES `gc_field` WRITE;
/*!40000 ALTER TABLE `gc_field` DISABLE KEYS */;
INSERT INTO `gc_field` VALUES (134,18,'编号','user_id',1,1,0,0,'',0,1,'center','','','','',1,'','','','','',''),(135,18,'真实姓名','name',1,1,0,0,'',1,1,'center','','用户名不能为空','notEmpty','',2,'','','','','',''),(136,18,'用户名','user',1,1,1,0,'',1,1,'center','','用户名不能为空','notEmpty','',3,'','','','','',''),(137,18,'密码','pwd',5,0,0,0,'',1,1,'center','','6-21位数字字母组合','notEmpty','/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/',4,'','','','','',''),(138,18,'所属分组','role_id',27,0,1,0,'',1,1,'center','','','','',5,'select role_id,name,pid from pre_role','','','varchar','250',''),(140,18,'备注','note',1,1,0,0,'',1,1,'center','','','','',7,'','','','','',''),(141,18,'状态','status',23,1,1,0,'开启|1,关闭|0',1,1,'center','','','','',7,'','','','tinyint','4',''),(142,18,'创建时间','create_time',12,1,0,0,'',1,1,'center','','','','',8,'','','','','',''),(143,18,'所属分组','role_name',1,1,0,0,'',0,0,'center','','','','',5,'','','','','',''),(144,19,'编号','role_id',1,1,0,NULL,'',0,0,'center','','','','',1,'','',NULL,NULL,NULL,NULL),(145,19,'角色','name',1,1,0,0,'',1,0,'left','','名称不能为空','notEmpty','',3,'','','','','',''),(146,19,'状态','status',23,1,0,0,'开启|1,关闭|0',1,0,'center','','','','',2387,'','','','tinyint','4',''),(2388,19,'描述','description',6,0,0,0,'',1,1,'center','','','','',2388,'','','','text','0',''),(2411,673,'编号','id',1,1,0,NULL,NULL,0,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(2412,673,'配置名称','title',1,1,1,0,NULL,1,0,'center',NULL,NULL,NULL,NULL,2412,NULL,NULL,NULL,'varchar','250',NULL),(2413,673,'覆盖同名文件','upload_replace',23,1,0,0,'开启|1,关闭|0',1,0,'center','','','','',2414,'','','','tinyint','4',''),(2414,673,'缩图开关','thumb_status',23,1,0,0,'开启|1,关闭|0',1,0,'center','','','','',2413,'','','','tinyint','4',''),(2415,673,'缩放宽度','thumb_width',1,1,0,0,'',1,0,'center','单位px','','','',2415,'','','','varchar','250',''),(194,41,'站点名称','site_title',1,0,0,NULL,'',1,0,'center','','','notEmpty','',194,'','基本设置','','','',''),(195,41,'关键词站点','keyword',28,0,0,NULL,'',0,0,'center','','','','',197,'','基本设置','',NULL,NULL,NULL),(196,41,'站点描述','description',6,0,0,NULL,'',0,0,'center','','','','',198,'','基本设置','',NULL,NULL,NULL),(198,41,'站点LOGO','site_logo',8,0,0,NULL,'',1,0,'center','','','','',196,'','基本设置',NULL,NULL,NULL,NULL),(200,41,'上传文件大小','file_size',1,0,0,0,'',1,0,'center','','','','',200,'','上传配置',NULL,NULL,NULL,NULL),(1462,41,'站点版权','copyright',1,NULL,0,NULL,'',1,NULL,'center','','','','',700,NULL,'基本设置','',NULL,NULL,NULL),(488,41,'文件类型','file_type',6,0,0,0,'',1,0,'center','','','','',488,'','上传配置',NULL,NULL,NULL,NULL),(3463,821,'名称','name',1,1,0,0,'',1,0,'center','','','notEmpty','',2893,'','','','varchar','250',''),(3464,821,'编号','id',1,1,0,NULL,NULL,0,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(2143,41,'水印位置','water_position',29,NULL,NULL,NULL,'左上角水印|1,上居中水印|2,右上角水印|3,左居中水印|4,居中水印|5,右居中水印|6,左下角水印|7,下居中水印|8,右下角水印|9',0,NULL,'center','','','','',2142,'','上传配置','',NULL,NULL,NULL),(2142,41,'水印状态','water_status',3,NULL,NULL,NULL,'正常|1|success,禁用|0|danger',0,NULL,'center','','','','',1462,'','上传配置','0',NULL,NULL,NULL),(2144,41,'水印图片','water_logo',8,NULL,NULL,NULL,'',0,NULL,'center','','','','',2143,'','上传配置','',NULL,NULL,NULL),(2416,673,'缩放高度','thumb_height',1,1,0,0,'',1,0,'center','单位px','','','',2416,'','','','varchar','250',''),(2417,673,'缩图方式','thumb_type',2,1,1,0,'等比例缩放|1,缩放后填充|2,居中裁剪|3,左上角裁剪|4,右下角裁剪|5,固定尺寸缩放|6',1,0,'center','','','','',2417,'','','','smallint','6',''),(2401,670,'创建时间','create_time',12,1,1,0,'',1,1,'center','','','','',2402,'','','','int','11',''),(2400,670,'异常信息','errmsg',1,0,0,0,'',1,1,'center','','','','',2400,'','','','varchar','250',''),(2402,670,'类型','type',3,1,1,0,'登录日志|1|primary,操作日志|2|success,异常日志|3|danger',1,1,'center','','','','',2401,'','','','smallint','6',''),(2399,670,'请求内容','content',6,0,0,0,'',1,1,'center','','','','',2399,'','','','text','0',''),(2397,670,'ip','ip',1,1,1,0,'',1,1,'center','','','','',2397,'','','','varchar','250',''),(2398,670,'useragent','useragent',1,0,0,0,'',1,1,'center','','','','',2398,'','','','varchar','250',''),(2396,670,'请求url','url',1,1,1,0,'',1,1,'center','','','','',2396,'','','','varchar','250',''),(2394,670,'应用名称','application_name',2,1,1,0,'',1,1,'center','','','','',2394,'select app_dir,app_dir from cd_application','','','varchar','50',''),(2395,670,'操作用户','username',1,1,1,0,'',1,1,'center','','','','',2395,'','','','varchar','250',''),(2387,19,'所属父类','pid',2,0,0,0,'',1,1,'center','','','','',2,'select role_id,name,pid from cd_role','','','smallint','6',''),(2393,670,'编号','id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(2893,762,'名称','name',1,1,1,0,'',1,1,'center','','','notEmpty','',2893,'','','','varchar','250',''),(2892,762,'编号','id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(2906,757,'平台id','wxapp_id',15,0,1,0,'',1,1,'center','','','','',2878,'','','','varchar','250',''),(2717,18,'头像','avatar',8,1,1,0,'',1,1,'center','','','','',2717,'','','','varchar','250',''),(3472,776,'性别','t_sex',3,1,0,0,'女|2|success,男|1|danger',1,1,'center','','','','',3068,'','','','smallint','6',''),(2726,729,'编号','t_id',1,1,0,0,'',0,1,'center','','','','',1,'','','','int','11',''),(2727,729,'名称','title',1,1,1,1,'',1,1,'center','','','','',2727,'','','','varchar','250',''),(2728,729,'图片','img',8,1,0,0,'',1,1,'center','','','','',2728,'','','','varchar','250',''),(2729,729,'购票须知','notice',16,0,0,0,'',1,1,'center','','','','',2729,'','','','text','0',''),(2743,733,'创建时间','createtime',12,1,1,0,'',1,1,'center','','','','',2744,'','','','int','11',''),(2744,733,'票务名称','title',1,1,0,0,'',0,0,'center','','','','',2743,'','','','varchar','250',''),(2741,733,'日期','date',31,1,1,0,'',1,1,'center','','','','',2741,'','','','varchar','250',''),(2742,733,'所属票务','t_id',2,0,1,1,'',1,1,'center','','','','',2742,'select t_id,title from cd_tickets','','','smallint','6',''),(2740,733,'编号','d_id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3018,772,'平台id','wxapp_id',15,0,1,0,'',1,1,'center','','','','',3018,'','','','varchar','250',''),(2907,757,'优惠券列表','coupon_list',27,0,0,0,'',1,1,'center','','','','',3970,'select o_id,c_name from gc_coupon where status=1','','','varchar','250',''),(2898,41,'分学校站点名称','school_site_title',1,NULL,NULL,NULL,'',1,NULL,'center','','','','',195,'','基本设置','',NULL,NULL,NULL),(2897,41,'子站点名称','sub_site_title',1,NULL,NULL,NULL,'',1,NULL,'center','','','notEmpty','',194,'','基本设置','',NULL,NULL,NULL),(2896,762,'创建时间','create_time',12,1,0,0,'',1,1,'center','','','','',3207,'','','','int','11',''),(2895,762,'图片','img',8,1,0,0,'',1,1,'center','','','notEmpty','',2896,'','','','varchar','250',''),(2875,752,'创建时间','create_time',12,1,0,0,'',1,1,'center','','','','',2875,'','','','int','11',''),(2874,752,'登录密码','pwd',1,0,0,0,'',1,1,'center','','','notEmpty','',2874,'','','','varchar','250',''),(2873,752,'登录账号','account',1,1,1,0,'',1,1,'center','','','notEmpty,unique','',2873,'','','','varchar','250',''),(2872,752,'编号','wxapp_id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3102,782,'优惠券列表','coupon_list',27,0,0,0,'',1,0,'center','','','','',2907,'select o_id,c_name from gc_coupon where status=1','','','varchar','250',''),(3101,782,'平台id','wxapp_id',1,0,1,0,'',1,0,'center','','','notEmpty','',2878,'','','','varchar','250',''),(2904,764,'创建时间','create_time',12,1,0,0,'',1,1,'center','','','','',2904,'','','','int','11',''),(2903,764,'金额','price',1,1,0,0,'',1,1,'center','','','notEmpty','/^(([1-9][0-9]*)|(([0]\\.\\d{1,2}|[1-9][0-9]*\\.\\d{1,2})))$/',2903,'','','','varchar','250',''),(2902,764,'优惠券名称','c_name',1,1,1,0,'',1,1,'center','','','notEmpty','',2902,'','','','varchar','250',''),(3484,822,'骑手审核状态','run_status',3,1,1,0,'未申请审核|0,审核中|1,审核通过|2,审核拒绝|-1',1,0,'center','','','','',3067,'','','','smallint','6',''),(2901,764,'平台id','wxapp_id',15,0,1,0,'',1,0,'center','','','','',2901,'','','','varchar','250',''),(3482,822,'余额','balance',13,1,0,0,'',1,0,'center','','','','',3063,'','','','decimal','10',''),(2900,764,'编号','o_id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3483,822,'所属学校','s_id',2,0,1,0,'',1,0,'center','','','','',3064,'select s_id,s_name from gc_school','','','smallint','6',''),(3016,770,'提现最低金额','withdraw_min',1,0,0,0,'',1,1,'center','','请输入正确的金额','','/^(([1-9][0-9]*)|(([0]\\.\\d{1,2}|[1-9][0-9]*\\.\\d{1,2})))$/',3016,'','财务设置','','varchar','250',''),(3015,770,'起步费','start_fee',1,0,0,0,'',1,1,'center','','请输入正确的金额','','/^(([1-9][0-9]*)|(([0]\\.\\d{1,2}|[1-9][0-9]*\\.\\d{1,2})))$/',3015,'','财务设置','','varchar','250',''),(3107,782,'二手市场抽成百分比','second_rate',20,1,0,0,'',1,0,'center','','','notEmpty','/^[0-9]*$/',2882,'','','','int','11',''),(3105,782,'机器人key','robot_key',1,0,0,0,'',1,0,'center','','','notEmpty','',2884,'','','','varchar','250',''),(3106,782,'是否允许分校修改跑腿抽佣','edit_status',2,1,0,0,'允许|1|success,不允许|0|danger',1,0,'center','','','notEmpty','',2883,'','','','smallint','6',''),(3104,782,'阶梯选择配置','step',6,0,0,0,'',1,0,'center','','','','',2885,'','','','text','0',''),(3103,782,'创建时间','create_time',12,1,0,0,'',1,0,'center','','','','',2906,'','','','int','11',''),(2966,769,'认证说明','explain',16,NULL,NULL,NULL,'',1,0,'center','','','','',2949,'','基本设置','',NULL,NULL,NULL),(2963,769,'小程序appid','appid',1,NULL,NULL,NULL,'',1,0,'center','','','','',2861,'','基本设置','',NULL,NULL,NULL),(2964,769,'小程序密钥','appsecret',1,NULL,NULL,NULL,'',1,0,'center','','','','',2897,'','基本设置','',NULL,NULL,NULL),(2965,769,'隐私协议','agreement',16,NULL,NULL,NULL,'',1,0,'center','','','','',2931,'','基本设置','',NULL,NULL,NULL),(3014,770,'阶梯价格','step_price',1,0,0,0,'',1,1,'center','','请输入正确的金额','','/^(([1-9][0-9]*)|(([0]\\.\\d{1,2}|[1-9][0-9]*\\.\\d{1,2})))$/',3014,'','财务设置','','varchar','250',''),(3608,829,'创建时间','create_time',12,1,0,0,'',1,0,'center','','','','',3474,'','','','int','11',''),(2889,758,'密码','pwd',1,1,0,0,'',1,1,'center','','','notEmpty','',2890,'','','','varchar','250',''),(2888,758,'管理学校','s_id',2,0,1,0,'',1,1,'center','','','notEmpty','',2888,'select s_id,s_name from gc_school','','','smallint','6',''),(2887,758,'账号','account',1,1,0,0,'',1,1,'center','','','notEmpty,unique','',2889,'','','','varchar','250',''),(2886,758,'编号','a_id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(2885,757,'创建时间','create_time',12,1,1,0,'',1,1,'center','','','','',2906,'','','','int','11',''),(2884,757,'阶梯选择配置','step',6,0,0,0,'',1,1,'center','','','','',2885,'','','','text','0',''),(2834,747,'门票id','t_id',1,1,0,0,'',1,0,'center','','','','',2812,'','','','varchar','250',''),(2833,747,'人数','num',1,1,0,0,'',1,0,'center','','','','',2811,'','','','varchar','250',''),(2832,747,'用户id','uid',24,1,1,0,'',1,0,'center','','','','',2807,'','','','varchar','250',''),(2831,747,'添加时间','createtime',1,1,0,0,'',1,0,'center','','','','',2810,'','','','varchar','250',''),(2830,747,'状态','status',1,1,1,0,'',1,0,'center','','','','',2809,'','','','varchar','250',''),(2829,747,'时间段','time',1,1,0,0,'',1,0,'center','','','','',2808,'','','','varchar','250',''),(2828,747,'日期','date',1,1,0,0,'',1,0,'center','','','','',2806,'','','','varchar','250',''),(2827,747,'核销码','code',30,1,0,0,'',1,0,'center','','','','',2805,'','','','varchar','250',''),(2826,747,'订单号','order_no',1,1,0,0,'',1,0,'center','','','','',2804,'','','','varchar','250',''),(2825,747,'编号','id',1,1,0,NULL,NULL,0,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(2905,764,'状态','status',23,1,0,0,'开启|1,关闭|0',1,1,'center','','','','',2905,'','','','tinyint','4',''),(2835,747,'预约人员','list',1,1,0,0,'',1,0,'center','','','notEmpty','',2824,'','','','varchar','250',''),(3124,785,'详情地址','addres',1,NULL,0,0,'',1,1,NULL,NULL,'','notEmpty','',3124,'',NULL,'','varchar','250',''),(3123,785,'学校id','s_id',3,NULL,0,0,'',1,1,NULL,NULL,'','notEmpty','',3123,'',NULL,'','smallint','6',''),(3121,785,'性别','sex',3,NULL,0,0,'（0男1女）',1,1,NULL,NULL,'','notEmpty','',3121,'',NULL,'','smallint','6',''),(3017,772,'编号','id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3122,785,'手机号','phone',1,NULL,0,0,'',1,1,NULL,NULL,'手机号有误','notEmpty','/^1[3456789]\\d{9}$/',3122,'',NULL,'','varchar','250',''),(3120,785,'联系人姓名','name',1,NULL,0,0,'',1,1,NULL,NULL,'','notEmpty','',3120,'',NULL,'','varchar','250',''),(2891,758,'创建时间','create_time',12,1,0,0,'',1,1,'center','','','','',3203,'','','','int','11',''),(3465,821,'创建时间','create_time',12,1,0,0,'',1,0,'center','','','','',3207,'','','','int','11',''),(3462,798,' 跳转的路径或者小程序APPID','appid',1,0,0,0,'',1,1,'center','','','','',3462,'','','','varchar','250',''),(2894,762,'所属学校','s_id',15,0,1,0,'',1,1,'center','','','','',2895,'','','','varchar','250',''),(2883,757,'机器人key','robot_key',1,0,0,0,'',1,1,'center','','','notEmpty','',2884,'','','','varchar','250',''),(2882,757,'是否允许分校修改跑腿抽佣','edit_status',2,1,0,0,'允许|1|success,不允许|0|danger',1,1,'center','','','notEmpty','',2883,'','','','smallint','6',''),(2881,757,'二手市场抽成百分比','second_rate',20,1,0,0,'',1,1,'center','','','notEmpty','/^[0-9]*$/',2882,'','','','int','11',''),(2880,757,'学校抽成','school_rate',20,1,0,0,'',1,1,'center','','请输入1-100的整数','notEmpty','/^[0-9]*$/',2881,'','','','int','11',''),(3995,758,'学校名称','s_name',1,1,0,0,'',1,0,'center','','','','',3995,'','','','varchar','250',''),(2878,757,'平台抽成','plat_rate',20,1,0,0,'',1,1,'center','','','notEmpty','/^[0-9]*$/',2880,'','','','int','11',''),(2877,757,'编号','s_id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(2962,769,'子站点名称','sub_site_title',1,NULL,NULL,NULL,'',1,0,'center','','','notEmpty','',194,'','基本设置','',NULL,NULL,NULL),(2960,769,'水印图片','water_logo',8,NULL,NULL,NULL,'',1,0,'center','','','','',2143,'','上传配置','',NULL,NULL,NULL),(2961,769,'分学校站点名称','school_site_title',1,NULL,NULL,NULL,'',1,0,'center','','','','',195,'','基本设置','',NULL,NULL,NULL),(2958,769,'水印位置','water_position',29,NULL,NULL,NULL,'左上角水印|1,上居中水印|2,右上角水印|3,左居中水印|4,居中水印|5,右居中水印|6,左下角水印|7,下居中水印|8,右下角水印|9',1,0,'center','','','','',2142,'','上传配置','',NULL,NULL,NULL),(2959,769,'水印状态','water_status',3,NULL,NULL,NULL,'正常|1|success,禁用|0|danger',1,0,'center','','','','',1462,'','上传配置','0',NULL,NULL,NULL),(2957,769,'绑定域名','domain',1,0,0,0,'',1,0,'center','上传目录绑定域名访问，请解析域名到 /public/upload目录  前面带上http://  非必填项','','','',2144,'','上传配置','','','',''),(2956,769,'文件类型','file_type',6,0,0,0,'',1,0,'center','','','','',488,'','上传配置',NULL,NULL,NULL,NULL),(2967,769,'大城市','ciy',16,0,1,0,'',1,0,'center','','','','',2967,'','上传配置','','text','0',''),(2953,769,'站点LOGO','site_logo',8,0,0,NULL,'',1,0,'center','','','','',196,'','基本设置',NULL,NULL,NULL,NULL),(2954,769,'上传文件大小','file_size',1,0,0,0,'',1,0,'center','','','','',200,'','上传配置',NULL,NULL,NULL,NULL),(3059,776,'平台id','wxapp_id',15,0,1,0,'',1,1,'center','','','','',3059,'','','','varchar','250',''),(2952,769,'站点描述','description',6,0,0,NULL,'',1,0,'center','','','','',198,'','基本设置',NULL,NULL,NULL,NULL),(2951,769,'关键词站点','keyword',28,0,0,NULL,'',1,0,'center','','','','',197,'','基本设置','',NULL,NULL,NULL),(2950,769,'站点名称','site_title',1,0,0,NULL,'',1,0,'center','','','notEmpty','',194,'','基本设置','','','',''),(3058,776,'编号','u_id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(2968,41,'证书上传','cert',10,NULL,NULL,NULL,'',0,NULL,'center','','','','',2968,'','上传配置','',NULL,NULL,NULL),(2969,770,'编号','id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(2970,770,'平台id','wxapp_id',15,0,1,0,'',1,1,'center','','','','',2970,'','','','varchar','250',''),(2971,770,'小程序appid','appid',1,1,0,0,'',1,1,'center','','','notEmpty','',2971,'','小程序设置','','varchar','250',''),(2972,770,'小程序密钥','appsecret',1,1,0,0,'',1,1,'center','','','','',2972,'','小程序设置','','varchar','250',''),(2973,770,'商户号','mch_id',1,1,0,0,'',1,1,'center','','','','',2973,'','小程序设置','','varchar','250',''),(2974,770,'商户号密钥','mch_key',1,1,0,0,'',1,1,'center','','','','',2974,'','小程序设置','','varchar','250',''),(2975,770,'骑手订阅消息模板ID','template_new',1,0,0,0,'',1,1,'center','','','','',2975,'','订阅消息配置','','varchar','250',''),(2976,770,'用户抢单提醒','template_grab',1,0,0,0,'',1,1,'center','','','','',2976,'','订阅消息配置','','varchar','250',''),(2978,770,'商家订阅消息','template_store',1,0,0,0,'',1,1,'center','','','','',2978,'','订阅消息配置','','varchar','250',''),(2977,770,'取消订单消息提醒','template_cancel',1,0,0,0,'',1,1,'center','','','','',2977,'','订阅消息配置','','varchar','250',''),(2979,770,'圈子留言订阅消息','template_comment',1,0,0,0,'',1,1,'center','','','','',2979,'','订阅消息配置','','varchar','250',''),(2980,770,'二手市场支付订阅消息','template_pay',1,0,0,0,'',1,1,'center','','','','',2980,'','订阅消息配置','','varchar','250',''),(2981,770,'用户会员包月价格','user_month_fee',1,0,0,0,'',1,1,'center','','','','',2981,'','小程序设置','','varchar','250',''),(2982,770,'用户会员包年价格','user_year_fee',1,0,0,0,'',1,1,'center','','','','',2982,'','小程序设置','','varchar','250',''),(2983,770,'商家周卡价格','store_week_fee',1,0,0,0,'',1,1,'center','','','','',2983,'','小程序设置','','varchar','250',''),(2985,770,'小程序个人中心logo','xcx_logo',8,0,0,0,'',1,1,'center','','','','',2985,'','图文设置','','varchar','250',''),(2984,770,'商家月卡价格','store_month_fee',1,0,0,0,'',1,1,'center','','','','',2984,'','小程序设置','','varchar','250',''),(2986,770,'分后台登录背景图','back_logo',8,0,0,0,'',1,1,'center','','','','',2986,'','图文设置','','varchar','250',''),(2987,770,'会员协议说明','vip_content',16,0,0,0,'',1,1,'center','','','','',2987,'','图文设置','','text','0',''),(2992,770,'企业付款到零钱','company_pay_switch',3,0,0,0,'开启|1|success,关闭|0|danger',1,1,'center','','','','',2992,'','开关设置','','smallint','6',''),(2988,770,'跑腿认证隐私条款','privacy_content',16,0,0,0,'',1,1,'center','','','','',2988,'','图文设置','','text','0',''),(2989,770,'帮助中心','help_content',16,0,0,0,'',1,1,'center','','','','',2989,'','图文设置','','text','0',''),(2990,770,'弹框内容','toast_content',16,0,0,0,'',1,1,'center','','','','',2990,'','图文设置','','text','0',''),(2991,770,'会员充值功能','user_vip_switch',3,0,0,0,'开启|1|success,关闭|0|danger',1,1,'center','','','','',2991,'','开关设置','','smallint','6',''),(2993,770,'骑手是否可跨校接单','take_all_switch',3,0,0,0,'开启|1|success,关闭|0|danger',1,1,'center','','','','',2993,'','开关设置','','smallint','6',''),(2994,770,'二手市场开启审核','second_check_switch',3,0,0,0,'开启|1|success,关闭|0|danger',1,1,'center','','','','',2994,'','开关设置','','smallint','6',''),(2995,770,'论坛文章开启审核','article_check_switch',3,0,0,0,'开启|1|success,关闭|0|danger',1,1,'center','','','','',2995,'','开关设置','','smallint','6',''),(2996,770,'首页论坛是否显示','index_quanzi_switch',3,0,0,0,'开启|1|success,关闭|0|danger',1,1,'center','','','','',2996,'','开关设置','','smallint','6',''),(2997,770,'首页弹窗是否显示','index_toast_switch',3,0,0,0,'开启|1|success,关闭|0|danger',1,1,'center','','','','',2997,'','开关设置','','smallint','6',''),(2998,770,'首页排行榜是否显示','index_rank_switch',3,0,0,0,'开启|1|success,关闭|0|danger',1,1,'center','','','','',2998,'','开关设置','','smallint','6',''),(2999,770,'首页模块是否显示','index_module_switch',3,0,0,0,'开启|1|success,关闭|0|danger',1,1,'center','','','','',2999,'','开关设置','','smallint','6',''),(3000,770,'首页历史订单是否显示','index_history_switch',3,0,0,0,'开启|1|success,关闭|0|danger',1,1,'center','','','','',3000,'','开关设置','','smallint','6',''),(3001,770,'论坛匿名是否开启','is_anonymous_switch',3,0,0,0,'开启|1|success,关闭|0|danger',1,1,'center','','','','',3001,'','开关设置','','smallint','6',''),(3002,770,'个人中心跑腿认证是否显示','runner_auth_switch',3,0,0,0,'开启|1|success,关闭|0|danger',1,1,'center','','','','',3002,'','开关设置','','smallint','6',''),(3003,770,'退款证书（apiclient_cert.pem）','refund_cert',10,0,0,0,'',1,1,'center','','','','',3003,'','小程序设置','','text','0',''),(3004,770,'退款证书（apiclient_key.pem）','refund_key',10,0,0,0,'',1,1,'center','','','','',3004,'','小程序设置','','text','0',''),(3005,770,'取快递文本框提示语句','qu_tips',1,0,0,0,'',1,1,'center','','','','',3005,'','其他设置','','varchar','250',''),(3006,770,'寄快递文本框提示语句','ji_tips',1,0,0,0,'',1,1,'center','','','','',3006,'','其他设置','','varchar','250',''),(3007,770,'食堂超市文本框提示语句','shi_tips',1,0,0,0,'',1,1,'center','','','','',3007,'','其他设置','','varchar','250',''),(3008,770,'万能任务文本框提示语句','wan_tips',1,0,0,0,'',1,1,'center','','','','',3008,'','其他设置','','varchar','250',''),(3009,770,'提现提示语句配置','withdraw_tips',1,0,0,0,'',1,1,'center','','','','',3009,'','其他设置','','varchar','250',''),(3010,770,'首页广告位类型','home_adv_type',3,0,0,0,'banner|1|success,视频|2|primary',1,1,'center','','','','',3010,'','其他设置','','smallint','6',''),(3011,770,'首页广告位id','home_adv_id',1,0,0,0,'',1,1,'center','','','','',3011,'','其他设置','','varchar','250',''),(3012,770,'二手市场广告位类型','second_adv_type',3,0,0,0,'banner|1|success,视频|2|primary',1,1,'center','','','','',3012,'','其他设置','','smallint','6',''),(3013,770,'二手市场广告位id','second_adv_id',1,0,0,0,'',1,1,'center','','','','',3013,'','其他设置','','varchar','250',''),(3019,772,'用户id','u_id',1,0,0,0,'',1,1,'center','','','','',3019,'','','','varchar','250',''),(3020,772,'提现账号','account',1,1,1,0,'',1,1,'center','','','','',3020,'','','','varchar','250',''),(3021,772,'提现金额','price',1,1,0,0,'',1,1,'center','','','','',3022,'','','','varchar','250',''),(3022,772,'提现类型','type',3,1,1,0,'支付宝|1,企业付款|2',1,1,'center','','','','',3023,'','','','smallint','6',''),(3023,772,'状态','status',3,1,1,0,'待审核|1|primary,审核通过|2|success,审核拒绝|3|danger',1,1,'center','','','','',3024,'','','','smallint','6',''),(3024,772,'创建时间','create_time',12,1,0,0,'',1,1,'center','','','','',3025,'','','','int','11',''),(3025,772,'修改时间','update_time',25,0,0,0,'',1,1,'center','','','','',3026,'','','','int','11',''),(3026,772,'提现姓名','name',1,1,1,0,'',1,1,'center','','','','',3021,'','','','varchar','250',''),(3045,775,'编号','u_id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3046,775,'平台id','wxapp_id',15,0,1,0,'',1,1,'center','','','','',3046,'','','','varchar','250',''),(3047,775,'是否开启远程附件','oss_status',23,1,0,0,'开启|1,关闭|0',1,1,'center','','','','',3047,'','类型选择','','tinyint','4',''),(3048,775,'类型','oss_default_type',3,1,0,0,'阿里|ali,七牛|qiniuyun',1,1,'center','','','','',3048,'','类型选择','','varchar','200',''),(3049,775,'Access Key ID','ali_oss_accesskeyid',1,0,0,0,'',1,1,'center','','','','',3049,'','阿里云配置','','varchar','250',''),(3050,775,'Access Key Secret','ali_oss_accesskeysecret',1,0,0,0,'',1,1,'center','','','','',3050,'','阿里云配置','','varchar','250',''),(3051,775,'url','ali_oss_endpoint',1,0,0,0,'',1,1,'center','','','','',3051,'','阿里云配置','','varchar','250',''),(3052,775,'bucket','ali_oss_bucket',1,0,0,0,'',1,1,'center','','','','',3052,'','阿里云配置','','varchar','250',''),(3053,775,'Accesskey','qny_oss_accesskey',1,0,0,0,'',1,1,'center','','','','',3053,'','七牛云配置','','varchar','250',''),(3054,775,'Secretkey','qny_oss_secretkey',1,0,0,0,'',1,1,'center','','','','',3054,'','七牛云配置','','varchar','250',''),(3055,775,'bucket','qny_oss_bucket',1,0,0,0,'',1,1,'center','','','','',3055,'','七牛云配置','','varchar','250',''),(3056,775,'url','qny_oss_domain',1,0,0,0,'',1,1,'center','','','','',3056,'','七牛云配置','','varchar','250',''),(3057,775,'创建时间','create_time',12,1,0,0,'',1,1,'center','','','','',3057,'','','','int','11',''),(3060,776,'昵称','nickname',1,1,1,1,'',1,0,'center','','','','',3061,'','','','varchar','250',''),(3061,776,'头像','avatar',8,1,0,0,'',1,1,'center','','','','',3062,'','','','varchar','250',''),(3062,776,'openid','openid',1,0,0,0,'',1,1,'center','','','','',3060,'','','','varchar','250',''),(3063,776,'创建时间','create_time',12,1,0,0,'',1,1,'center','','','','',3474,'','','','int','11',''),(3064,776,'余额','balance',13,1,0,0,'',1,1,'center','','','','',3063,'','','','decimal','10',''),(3637,832,'openid','openid',1,0,0,0,'',1,1,'center','','','','',3060,'','','','varchar','250',''),(3066,776,'所属学校','s_id',2,0,1,0,'',1,1,'center','','','','',3064,'select s_id,s_name from gc_school','','','smallint','6',''),(3067,776,'骑手审核状态','run_status',3,1,1,0,'未申请审核|0,审核中|1,审核通过|2,审核拒绝|-1',1,1,'center','','','','',3067,'','','','smallint','6',''),(3068,776,'认证学校id','auth_sid',2,0,0,0,'',1,1,'center','','','','',3069,'select s_id,s_name from gc_school','','','smallint','6',''),(3069,776,'所属学校名称','s_name',1,1,0,0,'',0,0,'center','','','','',3065,'','','','varchar','250',''),(3636,832,'头像','avatar',8,1,0,0,'',1,1,'center','','','','',3062,'','','','varchar','250',''),(3634,832,'编号','u_id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3635,832,'昵称','nickname',1,1,1,1,'',1,1,'center','','','','',3061,'','','','varchar','250',''),(3633,832,'平台id','wxapp_id',15,0,1,0,'',1,1,'center','','','','',3059,'','','','varchar','250',''),(3076,779,'编号','id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3077,779,'平台id','wxapp_id',15,0,1,0,'',1,1,'center','','','','',3077,'','','','varchar','250',''),(3078,779,'平台类型','sms_type',3,1,0,0,'阿里云|ali,创蓝|cl',1,1,'center','','','','',3079,'','基本配置','','varchar','200',''),(3089,779,'是否使用短信通知','sms_status',23,1,0,0,'开启|1,关闭|0',1,1,'center','','','','',3078,'','基本配置','','tinyint','4',''),(3080,779,'阿里云AccessKeyId','ali_sms_accesskeyid',1,0,0,0,'',1,1,'center','','','','',3080,'','阿里云配置','','varchar','250',''),(3081,779,'阿里云AccessKeySecret','ali_sms_accesskeysecret',1,0,0,0,'',1,1,'center','','','','',3081,'','阿里云配置','','varchar','250',''),(3082,779,'阿里云签名名称','ali_sms_signname',1,0,0,0,'',1,1,'center','','','','',3082,'','阿里云配置','','varchar','250',''),(3083,779,'阿里云模板CODE','ali_sms_tempcode',1,0,0,0,'',1,1,'center','','','','',3083,'','阿里云配置','','varchar','250',''),(3084,779,'创蓝账号','cl_account',1,0,0,0,'',1,1,'center','','','','',3084,'','创蓝配置','','varchar','250',''),(3085,779,'创蓝密码','cl_pwd',1,0,0,0,'',1,1,'center','','','','',3085,'','创蓝配置','','varchar','250',''),(3086,779,'创蓝签名名称','cl_sign',1,0,0,0,'',1,1,'center','','','','',3086,'','创蓝配置','','varchar','250',''),(3632,832,'性别','t_sex',3,1,0,0,'女|1|success,男|0|danger',1,1,'center','','','','',3068,'','','','smallint','6',''),(3088,779,'创建时间','create_time',12,1,0,0,'',1,1,'center','','','','',3088,'','','','int','11',''),(3481,822,'创建时间','create_time',12,1,0,0,'',1,0,'center','','','','',3474,'','','','int','11',''),(3480,822,'openid','openid',1,0,0,0,'',1,0,'center','','','','',3060,'','','','varchar','250',''),(3479,822,'头像','avatar',8,1,0,0,'',1,0,'center','','','','',3062,'','','','varchar','250',''),(3478,822,'昵称','nickname',1,1,1,0,'',1,0,'center','','','','',3061,'','','','varchar','250',''),(3476,822,'平台id','wxapp_id',1,0,1,0,'',1,0,'center','','','','',3059,'','','','varchar','250',''),(3475,822,'性别','t_sex',3,1,1,0,'女|1|success,男|0|danger',1,0,'center','','','notEmpty','',3068,'','','','smallint','6',''),(3108,782,'学校抽成','school_rate',20,1,0,0,'',1,0,'center','','请输入1-100的整数','notEmpty','/^[0-9]*$/',2881,'','','','int','11',''),(3109,782,'学校名称','s_name',1,1,0,1,'',1,0,'center','','','notEmpty,unique','',2879,'','','','varchar','250',''),(3110,782,'平台抽成','plat_rate',20,1,0,0,'',1,0,'center','','','notEmpty','/^[0-9]*$/',2880,'','','','int','11',''),(3111,782,'编号','s_id',1,1,0,NULL,NULL,0,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3119,785,'用户id','u_id',24,NULL,1,0,'',1,1,NULL,NULL,'','','',3119,'',NULL,'','varchar','250',''),(3118,785,'平台id','wxapp_id',1,NULL,1,0,'',1,1,NULL,NULL,'','','',3118,'',NULL,'','varchar','250',''),(3125,785,'创建时间','create_time',12,NULL,0,0,'',1,1,NULL,NULL,'','','',3125,'',NULL,'','int','11',''),(3282,799,'附件地址','attach_file',1,0,0,0,'',1,1,'center','','','','',3282,'','','','varchar','250',''),(3137,787,'创建时间','create_time',12,NULL,0,0,'',1,1,NULL,NULL,'','','',3137,'',NULL,'','int','11',''),(3136,787,'使用状态（0为未使用，1为已使用）','use_status',3,NULL,1,0,'',1,1,NULL,NULL,'','','',3136,'',NULL,'','smallint','6',''),(3135,787,'平台id','wxapp_id',1,NULL,0,0,'',1,1,NULL,NULL,'','','',3135,'',NULL,'','varchar','250',''),(3134,787,'学校id','s_id',1,NULL,1,0,'',1,1,NULL,NULL,'','','',3134,'',NULL,'','varchar','250',''),(3133,787,'用户id','u_id',24,NULL,1,0,'',1,1,NULL,NULL,'','','',3133,'',NULL,'','varchar','250',''),(3132,787,'优惠券id','o_id',1,NULL,0,0,'',1,1,NULL,NULL,'','notEmpty','',3132,'',NULL,'','varchar','250',''),(3138,787,'更新时间','update_time',1,NULL,0,0,'',1,1,NULL,NULL,'','','',3138,'',NULL,'','varchar','250',''),(3139,787,'优惠券名称','c_name',1,NULL,0,0,'',1,1,NULL,NULL,'','','',3139,'',NULL,'','varchar','250',''),(3140,787,'价格','price',13,NULL,0,0,'',1,1,NULL,NULL,'','','',3140,'',NULL,'','decimal','10',''),(3141,776,'到期时间','deadtime',1,0,0,0,'',1,1,'center','','','','',3141,'','','','varchar','250',''),(3142,790,'平台id','wxapp_id',1,0,1,0,'',1,0,'center','','','','',3018,'','','','varchar','250',''),(3143,790,'编号','id',1,1,0,NULL,NULL,0,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3144,790,'用户id','u_id',24,0,1,0,'',1,0,'center','','','','',3019,'','','','varchar','250',''),(3145,790,'提现账号','account',1,1,0,0,'',1,0,'center','','','notEmpty','',3020,'','','','varchar','250',''),(3146,790,'提现金额','price',1,1,0,0,'',1,0,'center','','','notEmpty','/(^[1-9]\\d*(\\.\\d{1,2})?$)|(^0(\\.\\d{1,2})?$)/',3022,'','','','varchar','250',''),(3147,790,'提现类型','type',3,1,0,0,'支付宝|1,企业付款|2',1,0,'center','','','','',3023,'','','','smallint','6',''),(3148,790,'状态','status',1,1,1,0,'待审核|1|primary,审核通过|2|success,审核拒绝|3|danger',1,0,'center','','','','',3024,'','','1','varchar','250',''),(3149,790,'创建时间','create_time',12,1,0,0,'',1,0,'center','','','','',3025,'','','','int','11',''),(3150,790,'修改时间','update_time',25,0,0,0,'',1,0,'center','','','','',3026,'','','','int','11',''),(3151,790,'提现姓名','name',1,1,0,0,'',1,0,'center','','','notEmpty','',3021,'','','','varchar','250',''),(3170,792,'创建时间','create_time',12,1,1,0,'',1,1,'center','','','','',3170,'','','Y-m-d H:i:s','int','11',''),(3169,792,'图标','image',8,1,1,0,'',1,1,'center','','','','',3169,'','','','varchar','250',''),(3168,792,'名称','title',1,1,1,0,'',1,1,'center','','','','',3168,'','','','varchar','250',''),(3167,792,'平台id','wxapp_id',15,0,1,0,'',1,1,'center','','','','',3167,'','','','varchar','250',''),(3166,792,'学校id','s_id',15,0,1,0,'',1,1,'center','','','','',3166,'','','','varchar','250',''),(3158,789,'编号','id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3159,789,'学校id','s_id',15,0,1,0,'',1,1,'center','','','','',3159,'','','','varchar','250',''),(3160,789,'平台id','wxapp_id',15,0,1,0,'',1,1,'center','','','','',3160,'','','','varchar','250',''),(3171,793,'编号','m_id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3161,789,'名称','title',1,1,1,0,'',1,1,'center','','','','',3161,'','','','varchar','250',''),(3162,789,'地址','address',1,1,1,0,'',1,1,'center','','','','',3162,'','','','varchar','250',''),(3165,792,'编号','id',1,1,0,0,'',0,1,'center','','','','',1,'','','','int','11',''),(3164,789,'添加时间','create_time',12,1,0,0,'',1,1,'center','','','','',3164,'','','Y-m-d H:i:s','int','11',''),(3172,793,'学校id','s_id',15,0,1,0,'',1,1,'center','','','','',3172,'','','','varchar','250',''),(3173,793,'平台id','wxapp_id',15,0,1,0,'',1,1,'center','','','','',3173,'','','','varchar','250',''),(3174,793,'图标','image',8,1,0,0,'',1,1,'center','','','','',3174,'','','','varchar','250',''),(3175,793,'名称','title',1,1,1,0,'',1,1,'center','','','','',3175,'','','','varchar','250',''),(3176,793,'金额','pay',13,1,0,0,'',1,1,'center','','','','',3176,'','','','decimal','10',''),(3177,793,'原价','price',13,0,0,0,'',1,1,'center','','','','',3177,'','','','decimal','10',''),(3178,793,'详情描述','details',1,1,0,0,'',1,1,'center','','','','',3178,'','','','varchar','250',''),(3179,793,'创建时间','create_time',12,1,1,0,'',1,1,'center','','','','',3179,'','','Y-m-d H:i:s','int','11',''),(3181,793,'分类','cid',2,0,0,0,'',1,1,'center','','','','',3181,'select id,title from gc_dmh_market_category','','','smallint','6',''),(3183,795,'编号','id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3184,795,'订单号','oid',1,1,1,0,'',0,1,'center','','','','',3184,'','','','varchar','250',''),(3185,795,'学校id','s_id',15,0,1,0,'',0,1,'center','','','','',3185,'','','','varchar','250',''),(3186,795,'平台id','wxapp_id',15,2,0,0,'',0,1,'center','','','','',3186,'','','','varchar','250',''),(3187,795,'商品','m_id',2,0,0,0,'',1,1,'center','','','','',3187,'select id,title from gc_dmh_market_goods','','','smallint','6',''),(3188,795,'用户id','uid',1,2,0,0,'',0,1,'center','','','','',3188,'','','','varchar','250',''),(3189,795,'价格','pay',13,1,0,0,'',0,1,'center','','','','',3189,'','','','decimal','10',''),(3191,795,'状态','state',23,1,1,0,'已完成|2,已支付|1,未支付|0',1,1,'center','','','','',3191,'','','','tinyint','4',''),(3190,795,'创建时间','create_time',12,1,0,0,'',1,1,'center','','','','',3195,'','','Y-m-d H:i:s','int','11',''),(3192,795,'下单人手机号','phone',1,1,0,0,'',1,1,'center','','','','',3192,'','','','varchar','250',''),(3193,795,'下单人姓名','name',1,1,0,0,'',1,1,'center','','','','',3193,'','','','varchar','250',''),(3194,795,'其他信息','other',1,1,0,0,'',1,1,'center','','','','',3194,'','','','varchar','250',''),(3195,796,'编号','id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3196,796,'学校id','s_id',15,0,1,0,'',0,1,'center','','','','',3196,'','','','varchar','250',''),(3197,796,'小程序id','wxapp_id',15,0,1,0,'',0,1,'center','','','','',3197,'','','','varchar','250',''),(3198,796,'商品','m_id',1,1,0,0,'',1,1,'center','','','','',3198,'select id,title from gc_dmh_market_goods','','','varchar','250',''),(3199,796,'用户昵称','u_id',1,0,0,0,'',1,1,'center','','','','',3199,'select id,nickname from gc_wechat_user','','','varchar','250',''),(3200,796,'评价内容','details',1,1,0,0,'',1,1,'center','','','','',3200,'','','','varchar','250',''),(3937,853,'编号','id',1,1,0,NULL,NULL,1,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3201,796,'上级','pid',1,0,0,0,'',0,1,'center','','','','',3201,'','','0','varchar','250',''),(3202,796,'创建时间','create_time',12,1,0,0,'',1,1,'center','','','','',3202,'','','Y-m-d H:i:s','int','11',''),(3203,758,'平台id','wxapp_id',15,0,0,0,'',1,1,'center','','','','',2887,'','','','varchar','250',''),(3204,762,'平台id','wxapp_id',15,0,1,0,'',1,1,'center','','','','',2894,'','','','varchar','250',''),(3205,762,'显示位置','show_type',3,1,1,0,'首页|1,二手市场|2,论坛|3,失物招领|4,商家列表|5',1,1,'center','','','','',3204,'','','','smallint','6',''),(3206,762,'跳转类型','url_type',3,1,1,0,'内部页面|1,外部小程序|2,外部链接|3',1,1,'center','','','','',3205,'','','','smallint','6',''),(3207,762,'url地址','url',1,0,0,0,'',1,1,'center','','','','',3206,'','','','varchar','250',''),(3938,853,'平台id','wxapp_id',15,0,1,0,'',1,1,'center','','','','',3938,'','','','varchar','250',''),(3607,829,'openid','openid',1,0,0,0,'',1,0,'center','','','','',3060,'','','','varchar','250',''),(3606,829,'头像','avatar',8,1,0,0,'',1,0,'center','','','','',3062,'','','','varchar','250',''),(3605,829,'昵称','nickname',1,1,1,0,'',1,0,'center','','','','',3061,'','','','varchar','250',''),(3603,829,'平台id','wxapp_id',15,0,1,0,'',1,0,'center','','','','',3059,'','','','varchar','250',''),(3602,829,'性别','t_sex',3,1,0,0,'女|2|success,男|1|danger',1,0,'center','','','','',3068,'','','','smallint','6',''),(3216,798,'编号','id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3217,798,'名称','title',1,1,1,0,'',1,1,'center','','','','',3217,'','','','varchar','250',''),(3218,798,'缩略图','image',8,1,0,0,'',1,1,'center','','','','',3218,'','','','varchar','250',''),(3219,798,'类型','types',3,1,0,0,'内部页面|0,外部链接|1,外部小程序|2',1,1,'center','','','','',3219,'','','','smallint','6',''),(3220,798,'起步价','start',13,1,0,0,'',1,1,'center','','','','',3220,'','','','decimal','10',''),(3221,798,'阶梯价格','ladder',13,1,0,0,'',1,1,'center','','','','',3221,'','','','decimal','10',''),(3222,798,'创建时间','create_time',12,1,0,0,'',1,1,'center','','','','',3222,'','','Y-m-d H:i:s','int','11',''),(3223,798,'学校','s_id',15,0,1,0,'',1,1,'center','','','','',3223,'','','','varchar','250',''),(3224,798,'平台id','wxapp_id',15,0,1,0,'',1,1,'center','','','','',3224,'','','','varchar','250',''),(3604,829,'编号','u_id',1,1,0,NULL,NULL,0,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3225,799,'编号','id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3477,822,'编号','u_id',24,1,1,0,'',0,0,'center',NULL,'','','',1,'',NULL,'','varchar','250',''),(3226,799,'学校id','s_id',15,0,1,0,'',1,1,'center','','','','',3226,'','','','varchar','250',''),(3227,799,'平台id','wxapp_id',15,0,1,0,'',1,1,'center','','','','',3227,'','','','varchar','250',''),(3228,800,'提现最低金额','withdraw_min',1,0,0,0,'',1,0,'center','','请输入正确的金额','','/^(([1-9][0-9]*)|(([0]\\.\\d{1,2}|[1-9][0-9]*\\.\\d{1,2})))$/',3016,'','财务设置','','varchar','250',''),(3229,800,'起步费','start_fee',1,0,0,0,'',1,0,'center','','请输入正确的金额','','/^(([1-9][0-9]*)|(([0]\\.\\d{1,2}|[1-9][0-9]*\\.\\d{1,2})))$/',3015,'','财务设置','','varchar','250',''),(3230,800,'阶梯价格','step_price',1,0,0,0,'',1,0,'center','','请输入正确的金额','','/^(([1-9][0-9]*)|(([0]\\.\\d{1,2}|[1-9][0-9]*\\.\\d{1,2})))$/',3014,'','财务设置','','varchar','250',''),(3231,800,'编号','id',1,1,0,NULL,NULL,0,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3232,800,'平台id','wxapp_id',1,0,1,0,'',1,0,'center','','','notEmpty','',2970,'','','','varchar','250',''),(3233,800,'小程序appid','appid',1,1,0,0,'',1,0,'center','','','notEmpty','',2971,'','小程序设置','','varchar','250',''),(3234,800,'小程序密钥','appsecret',1,1,0,0,'',1,0,'center','','','','',2972,'','小程序设置','','varchar','250',''),(3235,800,'商户号','mch_id',1,1,0,0,'',1,0,'center','','','','',2973,'','小程序设置','','varchar','250',''),(3236,800,'商户号密钥','mch_key',1,1,0,0,'',1,0,'center','','','','',2974,'','小程序设置','','varchar','250',''),(3237,800,'骑手订阅消息模板ID','template_new',1,0,0,0,'',1,0,'center','','','','',2975,'','订阅消息配置','','varchar','250',''),(3238,800,'用户抢单提醒','template_grab',1,0,0,0,'',1,0,'center','','','','',2976,'','订阅消息配置','','varchar','250',''),(3239,800,'商家订阅消息','template_store',1,0,0,0,'',1,0,'center','','','','',2978,'','订阅消息配置','','varchar','250',''),(3240,800,'取消订单消息提醒','template_cancel',1,0,0,0,'',1,0,'center','','','','',2977,'','订阅消息配置','','varchar','250',''),(3241,800,'圈子留言订阅消息','template_comment',1,0,0,0,'',1,0,'center','','','','',2979,'','订阅消息配置','','varchar','250',''),(3242,800,'二手市场支付订阅消息','template_pay',1,0,0,0,'',1,0,'center','','','','',2980,'','订阅消息配置','','varchar','250',''),(3243,800,'用户会员包月价格','user_month_fee',1,0,0,0,'',1,0,'center','','','','',2981,'','小程序设置','','varchar','250',''),(3244,800,'用户会员包年价格','user_year_fee',1,0,0,0,'',1,0,'center','','','','',2982,'','小程序设置','','varchar','250',''),(3245,800,'商家周卡价格','store_week_fee',1,0,0,0,'',1,0,'center','','','','',2983,'','小程序设置','','varchar','250',''),(3246,800,'小程序个人中心logo','xcx_logo',8,0,0,0,'',1,0,'center','','','','',2985,'','图文设置','','varchar','250',''),(3247,800,'商家月卡价格','store_month_fee',1,0,0,0,'',1,0,'center','','','','',2984,'','小程序设置','','varchar','250',''),(3248,800,'分后台登录背景图','back_logo',8,0,0,0,'',1,0,'center','','','','',2986,'','图文设置','','varchar','250',''),(3249,800,'会员协议说明','vip_content',16,0,0,0,'',1,0,'center','','','','',2987,'','图文设置','','text','0',''),(3250,800,'企业付款到零钱','company_pay_switch',3,0,0,0,'开启|1|success,关闭|0|danger',1,0,'center','','','','',2992,'','开关设置','','smallint','6',''),(3251,800,'跑腿认证隐私条款','privacy_content',16,0,0,0,'',1,0,'center','','','','',2988,'','图文设置','','text','0',''),(3252,800,'帮助中心','help_content',16,0,0,0,'',1,0,'center','','','','',2989,'','图文设置','','text','0',''),(3253,800,'弹框内容','toast_content',16,0,0,0,'',1,0,'center','','','','',2990,'','图文设置','','text','0',''),(3254,800,'会员充值功能','user_vip_switch',3,0,0,0,'开启|1|success,关闭|0|danger',1,0,'center','','','','',2991,'','开关设置','','smallint','6',''),(3255,800,'骑手是否可跨校接单','take_all_switch',3,0,0,0,'开启|1|success,关闭|0|danger',1,0,'center','','','','',2993,'','开关设置','','smallint','6',''),(3256,800,'二手市场开启审核','second_check_switch',3,0,0,0,'开启|1|success,关闭|0|danger',1,0,'center','','','','',2994,'','开关设置','','smallint','6',''),(3257,800,'论坛文章开启审核','article_check_switch',3,0,0,0,'开启|1|success,关闭|0|danger',1,0,'center','','','','',2995,'','开关设置','','smallint','6',''),(3258,800,'首页论坛是否显示','index_quanzi_switch',3,0,0,0,'开启|1|success,关闭|0|danger',1,0,'center','','','','',2996,'','开关设置','','smallint','6',''),(3259,800,'首页弹窗是否显示','index_toast_switch',3,0,0,0,'开启|1|success,关闭|0|danger',1,0,'center','','','','',2997,'','开关设置','','smallint','6',''),(3260,800,'首页排行榜是否显示','index_rank_switch',3,0,0,0,'开启|1|success,关闭|0|danger',1,0,'center','','','','',2998,'','开关设置','','smallint','6',''),(3261,800,'首页模块是否显示','index_module_switch',3,0,0,0,'开启|1|success,关闭|0|danger',1,0,'center','','','','',2999,'','开关设置','','smallint','6',''),(3262,800,'首页历史订单是否显示','index_history_switch',3,0,0,0,'开启|1|success,关闭|0|danger',1,0,'center','','','','',3000,'','开关设置','','smallint','6',''),(3263,800,'论坛匿名是否开启','is_anonymous_switch',3,0,0,0,'开启|1|success,关闭|0|danger',1,0,'center','','','','',3001,'','开关设置','','smallint','6',''),(3264,800,'个人中心跑腿认证是否显示','runner_auth_switch',3,0,0,0,'开启|1|success,关闭|0|danger',1,0,'center','','','','',3002,'','开关设置','','smallint','6',''),(3265,800,'退款证书（apiclient_cert.pem）','refund_cert',10,0,0,0,'',1,0,'center','','','','',3003,'','小程序设置','','text','0',''),(3266,800,'退款证书（apiclient_key.pem）','refund_key',10,0,0,0,'',1,0,'center','','','','',3004,'','小程序设置','','text','0',''),(3267,800,'取快递文本框提示语句','qu_tips',1,0,0,0,'',1,0,'center','','','','',3005,'','其他设置','','varchar','250',''),(3268,800,'寄快递文本框提示语句','ji_tips',1,0,0,0,'',1,0,'center','','','','',3006,'','其他设置','','varchar','250',''),(3269,800,'食堂超市文本框提示语句','shi_tips',1,0,0,0,'',1,0,'center','','','','',3007,'','其他设置','','varchar','250',''),(3270,800,'万能任务文本框提示语句','wan_tips',1,0,0,0,'',1,0,'center','','','','',3008,'','其他设置','','varchar','250',''),(3271,800,'提现提示语句配置','withdraw_tips',1,0,0,0,'',1,0,'center','','','','',3009,'','其他设置','','varchar','250',''),(3272,800,'首页广告位类型','home_adv_type',3,0,0,0,'banner|1|success,视频|2|primary',1,0,'center','','','','',3010,'','其他设置','','smallint','6',''),(3273,800,'首页广告位id','home_adv_id',1,0,0,0,'',1,0,'center','','','','',3011,'','其他设置','','varchar','250',''),(3274,800,'二手市场广告位类型','second_adv_type',3,0,0,0,'banner|1|success,视频|2|primary',1,0,'center','','','','',3012,'','其他设置','','smallint','6',''),(3275,800,'二手市场广告位id','second_adv_id',1,0,0,0,'',1,0,'center','','','','',3013,'','其他设置','','varchar','250',''),(3276,799,'订单的完成状态','status',2,1,1,0,'未支付|1,待接单|2,待取货|3,到送达|7,已完成|4,已过期|5,未完成|6,已取消|8,等待取消抢单|9',1,1,'center','','','','',3278,'','','','smallint','6',''),(3277,799,'图片','img',8,0,1,0,'',1,1,'center','','','','',3276,'','','','varchar','250',''),(3278,799,'订单号','ordersn',1,1,1,0,'',1,1,'center','','','','',3277,'','','','varchar','250',''),(3280,799,'订单类型','type',2,1,1,0,'取件|1,寄件|2,超市食堂|3,万能任务|4',1,1,'center','','','','',3280,'','','','smallint','6',''),(3281,799,'订单备注','remarks',1,0,0,0,'',1,1,'center','','','','',3281,'','','','varchar','250',''),(3706,836,'用户id','u_id',24,NULL,1,0,'',1,1,NULL,NULL,'','','',3706,'',NULL,'','varchar','250',''),(3283,799,'接单员性别限制','sex_limit',2,0,1,0,'无限制|0|primary,男|1|success,女|2|warning',1,1,'center','','','','',3283,'','','','smallint','6',''),(3284,799,'物品重量','weight',1,0,0,0,'',1,1,'center','','','','',3284,'','','','varchar','250',''),(3285,799,'件数','express_num',20,0,0,0,'',1,1,'center','','','','',3285,'','','','int','11',''),(3286,799,'开始时间','start_time',12,0,0,0,'',1,1,'center','','','','',3286,'','','Y-m-d H:i:s','int','11',''),(3287,799,'预计上门时间','door_time',12,0,0,0,'',1,1,'center','','','','',3287,'','','Y-m-d H:i:s','int','11',''),(3288,799,'发起用户openid','start_openid',1,0,0,0,'',1,1,'center','','','','',3288,'','','','varchar','250',''),(3289,799,'抢单用户openid','end_openid',1,0,0,0,'',1,1,'center','','','','',3289,'','','','varchar','250',''),(3290,799,'收货姓名','sh_name',1,0,0,0,'',1,1,'center','','','','',3290,'','','','varchar','250',''),(3291,799,'收货性别','sh_sex',2,0,0,0,'男|1|success,女|2|warning',1,1,'center','','','','',3291,'','','','smallint','6',''),(3705,836,'编号','id',1,1,0,NULL,NULL,0,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3292,799,'收货联系手机号','sh_phone',1,0,0,0,'',1,1,'center','','','','',3292,'','','','varchar','250',''),(3293,799,'收货学校','sh_school',1,0,0,0,'',1,1,'center','','','','',3293,'','','','varchar','250',''),(3294,799,'具体收货地址','sh_addres',1,0,0,0,'',1,1,'center','','','','',3294,'','','','varchar','250',''),(3295,799,'服务人数','service_num',20,0,0,0,'',1,1,'center','','','','',3295,'','','','int','11',''),(3935,795,'平台扣点','commission',13,1,0,0,'',1,1,'center','','','','',3935,'','','','decimal','10',''),(3936,793,'审核状态','examine',3,1,1,0,'审核中|0,审核通过|1,审核失败|2',1,1,'center','','','','',3936,'','','','smallint','6',''),(3298,799,'取货具体地址','qu_addres',1,0,0,0,'',1,1,'center','','','','',3298,'','','','varchar','250',''),(3939,853,'学校id','s_id',20,0,0,0,'',1,1,'center','','','','',3939,'','','','int','11',''),(3301,799,'优惠券id','co_id',1,0,0,0,'',1,1,'center','','','','',3301,'','','','varchar','250',''),(3302,799,'名称','co_name',1,0,0,0,'',1,1,'center','','','','',3302,'','','','varchar','250',''),(3933,795,'退款理由','reason',1,1,0,0,'',1,1,'center','','','','',3933,'','','','varchar','250',''),(3304,799,'商家id','store_id',1,0,0,0,'',1,1,'center','','','','',3304,'','','','varchar','250',''),(3305,799,'优惠券金额','y_money',13,1,0,0,'',1,1,'center','','','','',3307,'','','','decimal','10',''),(3306,799,'总价（跑腿费）','total',13,1,0,0,'',1,1,'center','','','','',3305,'','','','decimal','10',''),(3307,799,'实付金额','t_money',13,1,0,0,'',1,1,'center','','','','',3306,'','','','decimal','10',''),(3308,799,'跑腿被抽取的手续费','s_money',13,0,0,0,'平台跑腿抽成',1,1,'center','','','','',3308,'','','','decimal','10',''),(3309,799,'学校收取手续费','fxs_money',13,0,0,0,'学校跑腿抽成',1,1,'center','','','','',3309,'','','','decimal','10',''),(3310,799,'商家抽成费用','store_money',13,0,0,0,'平台商家抽成',1,1,'center','','','','',3310,'','','','decimal','10',''),(3311,799,'商品价格','food_money',13,1,0,0,'',1,1,'center','','','','',3311,'','','','decimal','10',''),(3312,799,'创建时间','createtime',12,1,1,0,'',1,1,'center','','','','',3312,'','','Y-m-d H:i:s','int','11',''),(3313,799,'更新时间','updatetime',12,0,0,0,'',1,1,'center','','','','',3313,'','','Y-m-d H:i:s','int','11',''),(3314,799,'订单过期时间','out_time',12,0,0,0,'',1,1,'center','','','','',3314,'','','Y-m-d H:i:s','int','11',''),(3315,799,'取消时间','cancel_time',12,0,0,0,'',1,1,'center','','','','',3315,'','','Y-m-d H:i:s','int','11',''),(3316,799,'超时','out_time_num',25,0,0,0,'',1,1,'center','','','','',3316,'','','','int','11',''),(3317,799,'商品详情','good_details',16,0,0,0,'',1,1,'center','','','','',3317,'','','','text','0',''),(3707,836,'学校id','s_id',1,NULL,1,0,'',1,1,NULL,NULL,'','','',3707,'',NULL,'','varchar','250',''),(3318,799,'取消抢单来自哪一方:user:下单者,rider:骑手','cancel_from',1,0,0,0,'',1,1,'center','','','','',3318,'','','','varchar','250',''),(3319,799,'拒绝原因','refuse_reason',1,0,0,0,'',1,1,'center','','','','',3319,'','','','varchar','250',''),(3320,799,'凭证','proof',1,0,0,0,'',1,1,'center','','','','',3320,'','','','varchar','250',''),(3321,799,'是否拒绝','is_refuse',20,0,0,0,'',1,1,'center','','','','',3321,'','','','int','11',''),(3322,799,'标题','title',1,0,0,0,'',1,1,'center','','','','',3322,'','','','varchar','250',''),(3323,799,'开始时间是否显示','is_start_show',20,0,0,0,'',1,1,'center','','','','',3323,'','','','int','11',''),(3704,835,'编号','id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3324,801,'创建时间','create_time',12,1,0,0,'',1,0,'center','','','','',3170,'','','Y-m-d H:i:s','int','11',''),(3325,801,'图标','image',8,1,0,0,'',1,0,'center','','','','',3169,'','','','varchar','250',''),(3326,801,'名称','title',1,1,0,0,'',1,0,'center','','','','',3168,'','','','varchar','250',''),(3327,801,'平台id','wxapp_id',6,0,1,0,'',1,0,'center','','','','',3167,'','','','text','0',''),(3328,801,'学校id','s_id',1,0,1,0,'',1,0,'center','','','','',3166,'','','','varchar','250',''),(3329,801,'编号','id',1,1,0,0,'',1,0,'center','','','','',1,'','','','int','11',''),(3617,831,'性别','t_sex',3,1,0,0,'女|2|success,男|1|danger',1,0,'center','','','','',3068,'','','','smallint','6',''),(3616,829,'手机号','phone',1,1,1,0,'',1,0,'center','','','','/^1[3456789]\\d{9}$/',3473,'','','','varchar','250',''),(3615,829,'姓名','t_name',1,1,1,0,'',1,0,'center','','','','',3472,'','','','varchar','250',''),(3614,829,'到期时间','deadtime',1,0,0,0,'',1,0,'center','','','','',3141,'','','','varchar','250',''),(3613,829,'所属学校名称','s_name',1,0,0,0,'',0,0,'center','','','','',3065,'','','','varchar','250',''),(3609,829,'余额','balance',13,1,0,0,'',1,0,'center','','','','',3063,'','','','decimal','10',''),(3340,803,'编号','id',1,0,0,NULL,NULL,1,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3341,803,'订单号','oid',1,1,0,0,'',1,0,'center','','','','',3184,'','','','varchar','250',''),(3342,803,'学校id','s_id',1,0,1,0,'',1,0,'center','','','','',3185,'','','','varchar','250',''),(3343,803,'平台id','wxapp_id',6,2,1,0,'',1,0,'center','','','','',3186,'','','','text','0',''),(3344,803,'商品','m_id',2,1,0,0,'',1,0,'center','','','','',3187,'select id,title from gc_dmh_market_goods','','','smallint','6',''),(3345,803,'用户id','uid',24,2,1,0,'',1,0,'center','','','','',3188,'','','','varchar','250',''),(3346,803,'价格','pay',13,1,0,0,'',1,0,'center','','','','',3189,'','','','decimal','10',''),(3347,803,'状态','state',23,1,0,0,'已完成|2,已支付|1,未支付|0',1,0,'center','','','','',3191,'','','','tinyint','4',''),(3348,803,'创建时间','create_time',12,1,0,0,'',1,0,'center','','','','',3195,'','','Y-m-d H:i:s','int','11',''),(3349,803,'下单人手机号','phone',1,1,0,0,'',1,0,'center','','','','',3192,'','','','varchar','250',''),(3350,803,'下单人姓名','name',1,1,0,0,'',1,0,'center','','','','',3193,'','','','varchar','250',''),(3351,803,'其他信息','other',1,1,0,0,'',1,0,'center','','','','',3194,'','','','varchar','250',''),(3352,804,'编号','id',1,1,0,NULL,NULL,0,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3353,804,'学校id','s_id',15,0,1,0,'',1,0,'center','','','','',3196,'','','','varchar','250',''),(3354,804,'小程序id','wxapp_id',15,0,1,0,'',1,0,'center','','','','',3197,'','','','varchar','250',''),(3355,804,'商品','m_id',1,1,1,0,'',1,0,'center','','','','',3198,'select id,title from gc_dmh_market_goods','','','varchar','250',''),(3356,804,'用户昵称','u_id',1,1,1,0,'',1,0,'center','','','','',3199,'','','','varchar','250',''),(3357,804,'评价内容','details',1,1,0,0,'',1,0,'center','','','','',3200,'','','','varchar','250',''),(3358,804,'上级','pid',1,0,1,0,'',1,0,'center','','','','',3201,'','','0','varchar','250',''),(3359,804,'创建时间','create_time',12,1,0,0,'',1,0,'center','','','','',3202,'','','Y-m-d H:i:s','int','11',''),(3360,805,'编号','id',1,1,0,NULL,NULL,0,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3361,805,'姓名','name',1,1,1,0,'',1,0,'center','','','','',3209,'','','','varchar','250',''),(3362,805,'手机号','phone',1,1,1,0,'',1,0,'center','','','','',3210,'','','','varchar','250',''),(3363,805,'添加时间','create_time',12,1,1,0,'',1,0,'center','','','','',3211,'','','Y-m-d H:i:s','int','11',''),(3364,805,'用户','uid',24,1,1,0,'',1,0,'center','','','','',3212,'','','','varchar','250',''),(3365,805,'状态','state',23,1,1,0,'拒绝|2,通过|1,审核中|0',1,0,'center','','','','',3213,'','','','tinyint','4',''),(3366,805,'平台id','wxapp_id',6,1,1,0,'',1,0,'center','','','','',3214,'','','','text','0',''),(3367,805,'学校id','s_id',6,1,1,0,'',1,0,'center','','','','',3215,'','','','text','0',''),(3368,806,'编号','id',1,1,0,NULL,NULL,0,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3369,806,'名称','tltle',1,1,1,0,'',1,0,'center','','','','',3217,'','','','varchar','250',''),(3370,806,'缩略图','image',8,1,1,0,'',1,0,'center','','','','',3218,'','','','varchar','250',''),(3371,806,'类型','types',3,1,1,0,'内部页面|0,外部链接|1,外部小程序|2',1,0,'center','','','','',3219,'','','','smallint','6',''),(3372,806,'起步价','start',13,1,1,0,'',1,0,'center','','','','',3220,'','','','decimal','10',''),(3373,806,'阶梯价格','ladder',13,1,1,0,'',1,0,'center','','','','',3221,'','','','decimal','10',''),(3374,806,'创建时间','create_time',12,1,1,0,'',1,0,'center','','','','',3222,'','','Y-m-d H:i:s','int','11',''),(3375,806,'学校','s_id',15,1,1,0,'',1,0,'center','','','','',3223,'','','','varchar','250',''),(3376,806,'平台id','wxapp_id',15,1,1,0,'',1,0,'center','','','','',3224,'','','','varchar','250',''),(3377,807,'编号','id',1,1,0,NULL,NULL,0,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3378,807,'学校id','s_id',1,0,1,0,'',1,0,'center','','','','',3159,'','','','varchar','250',''),(3379,807,'平台id','wxapp_id',1,0,1,0,'',1,0,'center','','','','',3160,'','','','varchar','250',''),(3380,807,'名称','title',1,1,0,0,'',1,0,'center','','','','',3161,'','','','varchar','250',''),(3381,807,'地址','address',1,1,0,0,'',1,0,'center','','','','',3162,'','','','varchar','250',''),(3382,807,'添加时间','create_time',12,1,0,0,'',1,0,'center','','','','',3164,'','','Y-m-d H:i:s','int','11',''),(3383,793,'用户id','u_id',24,0,1,0,'',1,1,'center','','','','',3383,'select u_id,nickname from gc_wechat_user','','','varchar','250',''),(3384,809,'编号','type_id',1,1,0,0,'',0,1,'center','','','','',1,'','','','int','11',''),(3385,809,'学校id','s_id',15,0,1,0,'',0,1,'center','','','','',3385,'','','','int','11',''),(3386,809,'平台id','wxapp_id',15,0,1,0,'',0,1,'center','','','','',3386,'','','','int','11',''),(3387,809,'分类名称','type_name',1,1,1,0,'',1,1,'center','','','notEmpty','',3387,'','','','varchar','250',''),(3388,809,'创建时间','createtime',12,1,1,0,'',1,1,'center','','','','',3388,'','','','int','11',''),(3389,811,'编号','business_id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3390,811,'学校id','s_id',15,0,1,0,'',1,1,'center','','','','',3390,'','','','int','11',''),(3391,811,'平台id','wxapp_id',15,0,1,0,'',1,1,'center','','','','',3391,'','','','int','11',''),(3392,811,'微信管理员昵称','wxadmin_name',29,1,1,0,'',1,1,'center','','','','',3392,'select u_id,nickname from gc_wechat_user ','','','int','6',''),(3393,811,'商家分类','type_id',2,2,1,0,'',1,1,'center','','','','',3393,'select type_id,type_name from gc_zh_business_type','','','smallint','6',''),(3394,811,'分类名称','type_name',1,1,0,0,'',0,0,'center','','','','',3394,'','','','varchar','250',''),(3395,811,'商家营业开始时间','start_time',1,0,0,0,'',1,1,'center','请输入营业开始时间。例: 08:30（冒号为英文冒号）','','','',3395,'','','','varchar','250',''),(3396,811,'商家打烊时间','end_time',1,0,0,0,'',1,1,'center','请输入打烊时间。例：20:30（冒号为英文冒号）','','','',3396,'','','','varchar','250',''),(3397,811,'商家名称','business_name',1,1,1,0,'',1,1,'center','','','notEmpty','',3397,'','','','varchar','250',''),(3398,811,'商家地址','business_address',1,1,1,0,'',1,1,'center','','','notEmpty','',3398,'','','','varchar','250',''),(3399,811,'商家电话','phone',1,1,1,0,'',1,1,'center','','','','/^1[3456789]\\d{9}$/',3399,'','','','varchar','250',''),(3400,811,'到期时间','expire_time',7,0,0,0,'',1,1,'center','','','','',3400,'','','','int','11',''),(3401,811,'商家图片','business_image',8,1,0,0,'',1,1,'center','','','','',3401,'','','','varchar','250',''),(3402,811,'营业状态','status',3,1,1,0,'营业|1|success,打烊|2|warning',1,1,'center','','','notEmpty','',3402,'','','','smallint','6',''),(3403,811,'商家类型','type',3,1,1,0,'校内|1|success,校外|2|warning',1,1,'center','','','notEmpty','',3403,'','','','smallint','6',''),(3404,811,'创建时间','createtime',12,1,1,0,'',1,1,'center','','','','',3404,'','','','int','11',''),(3405,812,'编号','goods_type_id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3406,812,'学校id','s_id',15,0,1,0,'',0,1,'center','','','','',3406,'','','','int','11',''),(3407,812,'平台id','wxapp_id',15,0,1,0,'',0,1,'center','','','','',3407,'','','','int','11',''),(3408,812,'所属商家','business_id',2,2,1,0,'',1,1,'center','','','','',3408,'select business_id,business_name from gc_zh_business','','','smallint','6',''),(3409,812,'商家名称','business_name',1,1,0,0,'',0,0,'center','','','','',3409,'','','','varchar','250',''),(3410,812,'分类名称','goods_type_name',1,1,1,0,'',1,1,'center','','','notEmpty','',3410,'','','','varchar','250',''),(3411,812,'创建时间','createtime',12,1,1,0,'',1,1,'center','','','','',3411,'','','','int','11',''),(3412,813,'编号','id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3413,813,'学校id','s_id',15,0,1,0,'',0,1,'center','','','','',3413,'','','','int','11',''),(3414,813,'平台id','wxapp_id',15,0,1,0,'',0,1,'center','','','','',3414,'','','','int','11',''),(3415,813,'所属分类','goods_type_id',2,2,1,0,'',1,1,'center','','','notEmpty','',3415,'select goods_type_id,goods_type_name from gc_zh_goods_type','','','smallint','6',''),(3416,813,'分类名称','goods_type_name',1,1,0,0,'',0,0,'center','','','','',3416,'','','','varchar','250',''),(3417,813,'所属商家','business_id',2,2,1,0,'',1,1,'center','','','notEmpty','',3417,'select business_id,business_name from gc_zh_business','','','smallint','6',''),(3418,813,'商家名称','business_name',1,1,0,0,'',0,0,'center','','','','',3418,'','','','varchar','250',''),(3419,813,'商品名称','goods_name',1,1,1,1,'',1,1,'center','','','notEmpty','',3419,'','','','varchar','250',''),(3420,813,'商品价格','price',13,1,1,0,'',1,1,'center','','','','',3420,'','','','decimal','10',''),(3421,813,'商品图片','goods_img',8,1,0,0,'',1,1,'center','','','','',3421,'','','','varchar','250',''),(3422,813,'状态','status',3,1,1,0,'上架|1|success,下架|0|danger,草稿|2|info',1,1,'center','','','','',3422,'','','2','smallint','6',''),(3423,813,'创建时间','createtime',12,1,1,0,'',1,1,'center','','','','',3423,'','','','int','11',''),(3424,815,'编号','info_id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3425,815,'学校id','s_id',15,0,1,0,'',0,1,'center','','','','',3425,'','','','int','11',''),(3426,815,'平台id','wxapp_id',15,0,1,0,'',0,1,'center','','','','',3426,'','','','int','11',''),(3427,815,'物品名称','title',1,1,1,1,'',1,1,'center','','','notEmpty','',3427,'','','','varchar','250',''),(3428,815,'地点','address',1,1,1,1,'',1,1,'center','','','','',3428,'','','','varchar','250',''),(3429,815,'用户id','u_id',1,2,0,0,'',1,1,'center','','','','',3429,'','','','varchar','250',''),(3857,815,'图片','image',1,0,0,0,'',1,1,'center','','','','',3857,'','','','varchar','250',''),(3430,815,'所属分类','type',2,1,1,0,'失物招领|1|primary,寻物启事|2|success',1,1,'center','','','notEmpty','',3430,'','','','smallint','6',''),(3431,815,'媒体类型','media_type',2,1,1,0,'视频|1| primary,图片|2|succes',1,1,'center','','','','',3431,'','','','smallint','6',''),(3432,815,'创建时间','createtime',12,1,1,0,'',1,1,'center','','','','',3432,'','','','int','11',''),(3433,816,'编号','id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3434,816,'学校id','s_id',15,0,1,0,'',0,1,'center','','','','',3434,'','','','int','11',''),(3435,816,'平台id','wxapp_id',15,0,1,0,'',0,1,'center','','','','',3435,'','','','int','11',''),(3436,816,'所属信息','info_id',2,2,1,0,'',1,1,'center','','','','',3436,'select info_id,title from gc_zh_info','','','smallint','6',''),(3437,816,'信息名称	','title',1,1,0,0,'',0,0,'center','','','','',3437,'','','','varchar','250',''),(3438,816,'内容','content',6,1,0,0,'',1,1,'center','','','notEmpty','',3438,'','','','text','0',''),(3439,816,'创建时间','createtime',12,1,1,0,'',1,1,'center','','','','',3439,'','','','int','11',''),(3440,818,'编号','class_id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3441,818,'学校id','s_id',15,0,1,0,'',1,1,'center','','','','',3441,'','','','int','11',''),(3442,818,'平台id','wxapp_id',15,0,1,0,'',1,1,'center','','','','',3442,'','','','int','11',''),(3443,818,'分类名称','class_name',1,1,0,1,'',1,1,'center','','','notEmpty','',3444,'','','','varchar','250',''),(3444,818,'创建时间','createtime',12,1,1,0,'',1,1,'center','','','','',3974,'','','','int','11',''),(3445,819,'编号','article_id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3446,819,'学校id','s_id',15,0,1,0,'',0,1,'center','','','','',3446,'','','','int','11',''),(3447,819,'平台id','wxapp_id',15,0,1,0,'',0,1,'center','','','','',3447,'','','','int','11',''),(3448,819,'所属分类','class_id',2,2,1,0,'',1,1,'center','','','','',3448,'select class_id,class_name from gc_zh_forum_class','','','smallint','6',''),(3449,819,'分类名称','class_name',1,1,0,0,'',0,0,'center','','','','',3449,'','','','varchar','250',''),(3450,819,'用户id','u_id',1,2,0,0,'',1,1,'center','','','','',3450,'','','','varchar','250',''),(3451,819,'内容','content',6,1,0,0,'',1,1,'center','','','notEmpty','',3451,'','','','text','0',''),(3452,819,'媒体类型','media_type',2,1,1,0,'视频|1|success,图片|2|warning',1,1,'center','','','','',3452,'','','','smallint','6',''),(3453,819,'状态','status',3,1,1,0,'待审核|0|warning,通过|1|success,拒绝|2|warning',1,1,'center','','','','',3453,'','','','smallint','6',''),(3454,819,'创建时间','createtime',12,1,1,0,'',1,1,'center','','','','',3454,'','','','int','11',''),(3455,820,'编号','id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3456,820,'学校id','s_id',15,0,1,0,'',0,1,'center','','','','',3456,'','','','int','11',''),(3457,820,'平台id','wxapp_id',15,0,1,0,'',0,1,'center','','','','',3457,'','','','int','11',''),(3458,820,'所属文章','article_id',2,2,1,0,'',1,1,'center','','','notEmpty','',3458,'select article_id,content from gc_zh_articles','','','smallint','6',''),(3459,820,'文章内容','content',1,1,0,0,'',0,0,'center','','','','',3459,'','','','varchar','250',''),(3460,820,'内容','contents',6,1,0,0,'',1,1,'center','','','','',3460,'','','','text','0',''),(3461,820,'创建时间','createtime',12,1,1,0,'',1,1,'center','','','','',3461,'','','','int','11',''),(3466,821,'图片','img',8,0,0,0,'',1,0,'center','','','notEmpty','',2896,'','','','varchar','250',''),(3467,821,'所属学校','s_id',1,0,1,0,'',1,0,'center','','','notEmpty','',2895,'','','','varchar','250',''),(3468,821,'平台id','wxapp_id',1,0,1,0,'',1,0,'center','','','','',2894,'','','','varchar','250',''),(3469,821,'显示位置','show_type',3,1,1,0,'首页|1,二手市场|2,论坛|3,失物招领|4,商家列表|5',1,0,'center','','','','',3204,'','','','smallint','6',''),(3470,821,'跳转类型','url_type',3,1,0,0,'内部页面|1,外部小程序|2,外部链接|3',1,0,'center','','','','',3205,'','','','smallint','6',''),(3471,821,'url地址','url',1,0,0,0,'',1,0,'center','','','','',3206,'','','','varchar','250',''),(3473,776,'姓名','t_name',1,1,1,0,'',1,1,'center','','','','',3472,'','','','varchar','250',''),(3474,776,'手机号','phone',1,1,1,0,'',1,1,'center','','','','/^1[3456789]\\d{9}$/',3473,'','','','varchar','250',''),(3485,822,'认证学校id','auth_sid',2,0,1,0,'',1,0,'center','','','notEmpty','',3069,'','','','smallint','6',''),(3486,822,'所属学校名称','s_name',1,1,0,0,'',0,0,'center','','','','',3065,'','','','varchar','250',''),(3487,822,'到期时间','deadtime',1,1,0,0,'',1,0,'center','','','','',3141,'','','','varchar','250',''),(3488,822,'姓名','t_name',1,1,1,0,'',1,0,'center','','','notEmpty','',3472,'','','','varchar','250',''),(3489,822,'手机号','phone',1,1,1,0,'',1,0,'center','','','notEmpty','/^1[3456789]\\d{9}$/',3473,'','','','varchar','250',''),(3490,823,'附件地址','attach_file',1,1,0,0,'',1,0,'center','','','','',3282,'','','','varchar','250',''),(3491,823,'编号','id',1,1,0,NULL,NULL,0,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3492,823,'学校id','s_id',15,0,1,0,'',1,0,'center','','','','',3226,'','','','varchar','250',''),(3493,823,'平台id','wxapp_id',15,0,1,0,'',1,0,'center','','','','',3227,'','','','varchar','250',''),(3494,823,'订单的完成状态','status',1,1,1,0,'未支付|1,待接单|2,待取货|3,到送达|7,已完成|4,已过期|5,未完成|6,已取消|8,等待取消抢单|9,',1,0,'center','','','','',3276,'','','','tinyint','2',''),(3495,823,'图片','img',8,1,0,0,'',1,0,'center','','','','',3277,'','','','varchar','250',''),(3496,823,'订单号','ordersn',1,1,1,0,'',1,0,'center','','','','',3278,'','','','varchar','250',''),(3497,823,'商品id','goods_id',1,1,0,0,'',1,0,'center','','','','',3279,'','','','varchar','250',''),(3498,823,'订单类型','type',2,1,1,0,'取件|1,寄件|2,超市食堂|3,无所不能/饮品|4',1,0,'center','','','','',3280,'','','','tinyint','2',''),(3499,823,'订单备注','remarks',1,1,0,0,'',1,0,'center','','','','',3281,'','','','varchar','250',''),(3500,823,'接单员性别限制','sex_limit',2,1,0,0,'男|1|success,女|2|warning',1,0,'center','','','','',3283,'','','','smallint','6',''),(3501,823,'物品重量','weight',1,1,0,0,'',1,0,'center','','','','',3284,'','','','varchar','250',''),(3502,823,'件数','express_num',20,1,0,0,'',1,0,'center','','','','',3285,'','','','int','11',''),(3503,823,'开始时间','start_time',12,1,0,0,'',1,0,'center','','','','',3286,'','','Y-m-d H:i:s','int','11',''),(3504,823,'预计上门时间','door_time',12,1,0,0,'',1,0,'center','','','','',3287,'','','Y-m-d H:i:s','int','11',''),(3505,823,'发起用户openid','start_openid',1,1,0,0,'',1,0,'center','','','','',3288,'','','','varchar','250',''),(3506,823,'抢单用户openid','end_openid',1,1,0,0,'',1,0,'center','','','','',3289,'','','','varchar','250',''),(3507,823,'收获姓名','sh_name',1,1,0,0,'',1,0,'center','','','','',3290,'','','','varchar','250',''),(3508,823,'收货性别','sh_sex',2,1,0,0,'男|1|success,女|2|warning',1,0,'center','','','','',3291,'','','','smallint','6',''),(3509,823,'收获联系手机号','sh_phone',1,1,0,0,'',1,0,'center','','','','',3292,'','','','varchar','250',''),(3510,823,'收获学校','sh_school',1,1,0,0,'',1,0,'center','','','','',3293,'','','','varchar','250',''),(3511,823,'具体收货地址','sh_addres',1,1,0,0,'',1,0,'center','','','','',3294,'','','','varchar','250',''),(3512,823,'服务人数','service_num',20,1,0,0,'',1,0,'center','','','','',3295,'','','','int','11',''),(3513,823,'收货经度参数','sh_longitude',1,1,0,0,'',1,0,'center','','','','',3296,'','','','varchar','250',''),(3514,823,'收货纬度参数','sh_latitude',1,1,0,0,'',1,0,'center','','','','',3297,'','','','varchar','250',''),(3515,823,'取货具体地址','qu_addres',1,1,0,0,'',1,0,'center','','','','',3298,'','','','varchar','250',''),(3516,823,'取货经度参数','qu_longitude',1,1,0,0,'',1,0,'center','','','','',3299,'','','','varchar','250',''),(3517,823,'取货纬度参数','qu_latitude',1,1,0,0,'',1,0,'center','','','','',3300,'','','','varchar','250',''),(3518,823,'优惠券id','co_id',1,1,0,0,'',1,0,'center','','','','',3301,'','','','int','11',''),(3519,823,'名称','co_name',1,1,0,0,'',1,0,'center','','','','',3302,'','','','varchar','250',''),(3520,823,'商品预估价','guess_price',1,1,0,0,'',1,0,'center','','','','',3303,'','','','varchar','250',''),(3521,823,'商家id','store_id',1,1,0,0,'',1,0,'center','','','','',3304,'','','','int','11',''),(3522,823,'优惠券金额','y_money',13,1,0,0,'',1,0,'center','','','','',3305,'','','','decimal','10',''),(3523,823,'总价（跑腿费）','total',13,1,0,0,'',1,0,'center','','','','',3306,'','','','decimal','10',''),(3524,823,'实付金额','t_money',13,1,0,0,'',1,0,'center','','','','',3307,'','','','decimal','10',''),(3525,823,'跑腿被抽取的手续费','s_money',13,1,0,0,'',1,0,'center','','','','',3308,'','','','decimal','10',''),(3526,823,'学校收取手续费','fxs_money',13,1,0,0,'',1,0,'center','','','','',3309,'','','','decimal','10',''),(3527,823,'商家抽成费用','store_money',13,1,0,0,'',1,0,'center','','','','',3310,'','','','decimal','10',''),(3528,823,'商品价格','food_money',13,1,0,0,'',1,0,'center','','','','',3311,'','','','decimal','10',''),(3529,823,'创建时间','createtime',12,1,0,0,'',1,0,'center','','','','',3312,'','','Y-m-d H:i:s','int','11',''),(3530,823,'更新时间','updatetime',12,1,0,0,'',1,0,'center','','','','',3313,'','','Y-m-d H:i:s','int','11',''),(3531,823,'订单过期时间','out_time',12,1,0,0,'',1,0,'center','','','','',3314,'','','Y-m-d H:i:s','int','11',''),(3532,823,'取消时间','cancel_time',12,1,0,0,'',1,0,'center','','','','',3315,'','','Y-m-d H:i:s','int','11',''),(3533,823,'超时','out_time_num',25,1,0,0,'',1,0,'center','','','','',3316,'','','','int','11',''),(3534,823,'商品详情','good_details',16,1,0,0,'',1,0,'center','','','','',3317,'','','','text','0',''),(3535,823,'取消抢单来自哪一方:user:下单者,rider:骑手','cancel_from',1,1,0,0,'',1,0,'center','','','','',3318,'','','','varchar','250',''),(3536,823,'拒绝原因','refuse_reason',1,1,0,0,'',1,0,'center','','','','',3319,'','','','varchar','250',''),(3537,823,'凭证','proof',1,1,0,0,'',1,0,'center','','','','',3320,'','','','varchar','250',''),(3538,823,'是否拒绝','is_refuse',20,1,0,0,'',1,0,'center','','','','',3321,'','','','int','11',''),(3539,823,'标题','title',1,1,0,0,'',1,0,'center','','','','',3322,'','','','varchar','250',''),(3540,823,'开始时间是否显示','is_start_show',20,1,0,0,'',1,0,'center','','','','',3323,'','','','int','11',''),(3618,831,'平台id','wxapp_id',15,0,1,0,'',1,0,'center','','','','',3059,'','','','varchar','250',''),(3611,829,'骑手审核状态','run_status',3,0,0,0,'未申请审核|0,审核中|1,审核通过|2,审核拒绝|-1',1,0,'center','','','','',3067,'','','','smallint','6',''),(3612,829,'认证学校id','auth_sid',15,0,0,0,'',1,0,'center','','','','',3069,'select s_id,s_name from gc_school','','','varchar','250',''),(3610,829,'所属学校','s_id',15,0,1,0,'',0,0,'center','','','','',3064,'select s_id,s_name from gc_school','','','varchar','250',''),(3601,828,'用户id','u_id',24,0,1,0,'',1,0,'center','','','','',3383,'','','','varchar','250',''),(3600,828,'分类','cid',2,0,0,0,'',1,0,'center','','','','',3181,'select id,title from gc_dmh_market_category','','','smallint','6',''),(3599,828,'创建时间','create_time',12,1,0,0,'',1,0,'center','','','','',3179,'','','Y-m-d H:i:s','int','11',''),(3598,828,'详情描述','details',1,1,0,0,'',1,0,'center','','','','',3178,'','','','varchar','250',''),(3597,828,'原价','price',13,1,0,0,'',1,0,'center','','','','',3177,'','','','decimal','10',''),(3596,828,'金额','pay',13,1,0,0,'',1,0,'center','','','','',3176,'','','','decimal','10',''),(3592,828,'学校id','s_id',15,0,1,0,'',1,0,'center','','','','',3172,'','','','varchar','250',''),(3593,828,'平台id','wxapp_id',15,0,1,0,'',1,0,'center','','','','',3173,'','','','varchar','250',''),(3594,828,'图标','image',8,1,0,0,'',1,0,'center','','','','',3174,'','','','varchar','250',''),(3595,828,'名称','title',1,1,0,0,'',1,0,'center','','','','',3175,'','','','varchar','250',''),(3591,828,'编号','m_id',1,1,1,0,'',1,0,'center',NULL,'','','',1,'',NULL,'','int','11',''),(3619,831,'编号','u_id',1,1,0,NULL,NULL,0,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3620,831,'昵称','nickname',1,1,1,0,'',1,0,'center','','','','',3061,'','','','varchar','250',''),(3621,831,'头像','avatar',8,1,0,0,'',1,0,'center','','','','',3062,'','','','varchar','250',''),(3622,831,'openid','openid',1,0,0,0,'',1,0,'center','','','','',3060,'','','','varchar','250',''),(3623,831,'创建时间','create_time',12,1,0,0,'',1,0,'center','','','','',3474,'','','','int','11',''),(3624,831,'余额','balance',13,1,0,0,'',1,0,'center','','','','',3063,'','','','decimal','10',''),(3625,831,'所属学校','s_id',1,0,0,0,'',1,0,'center','','','','',3064,'select s_id,s_name from gc_school','','','varchar','250',''),(3626,831,'骑手审核状态','run_status',3,1,1,0,'未申请审核|0,审核中|1,审核通过|2,审核拒绝|-1',1,0,'center','','','','',3067,'','','','smallint','6',''),(3627,831,'认证学校id','auth_sid',15,0,1,0,'',0,0,'center','','','','',3069,'select s_id,s_name from gc_school','','','varchar','250',''),(3628,831,'所属学校名称','s_name',1,0,0,0,'',0,0,'center','','','','',3065,'','','','varchar','250',''),(3629,831,'到期时间','deadtime',1,0,0,0,'',1,0,'center','','','','',3141,'','','','varchar','250',''),(3630,831,'姓名','t_name',1,1,1,0,'',1,0,'center','','','','',3472,'','','','varchar','250',''),(3631,831,'手机号','phone',1,1,1,0,'',1,0,'center','','','','/^1[3456789]\\d{9}$/',3473,'','','','varchar','250',''),(3638,832,'创建时间','create_time',12,1,0,0,'',1,1,'center','','','','',3474,'','','','int','11',''),(3639,832,'余额','balance',13,1,0,0,'',1,1,'center','','','','',3063,'','','','decimal','10',''),(3640,832,'所属学校','s_id',2,0,1,0,'',1,1,'center','','','','',3064,'select s_id,s_name from gc_school','','','smallint','6',''),(3641,832,'骑手审核状态','run_status',3,1,1,0,'未申请审核|0,审核中|1,审核通过|2,审核拒绝|-1',1,1,'center','','','','',3067,'','','','smallint','6',''),(3642,832,'认证学校id','auth_sid',2,0,1,0,'',1,1,'center','','','','',3069,'select s_id,s_name from gc_school','','','smallint','6',''),(3643,832,'所属学校名称','s_name',1,1,0,0,'',0,1,'center','','','','',3065,'','','','varchar','250',''),(3644,832,'到期时间','deadtime',1,0,0,0,'',1,1,'center','','','','',3141,'','','','varchar','250',''),(3645,832,'姓名','t_name',1,1,1,0,'',1,1,'center','','','','',3472,'','','','varchar','250',''),(3646,832,'手机号','phone',1,1,1,0,'',1,1,'center','','','','/^1[3456789]\\d{9}$/',3473,'','','','varchar','250',''),(3647,833,'附件地址','attach_file',1,0,0,0,'',1,0,'center','','','','',3282,'','','','varchar','250',''),(3648,833,'编号','id',1,1,0,NULL,NULL,1,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3649,833,'学校id','s_id',15,0,0,0,'',1,0,'center','','','','',3226,'','','','varchar','250',''),(3650,833,'平台id','wxapp_id',15,0,0,0,'',1,0,'center','','','','',3227,'','','','varchar','250',''),(3651,833,'订单的完成状态','status',2,1,1,0,'未支付|1,待接单|2,待取货|3,到送达|7,已完成|4,已过期|5,未完成|6,已取消|8,等待取消抢单|9',1,0,'center','','','','',3280,'','','','smallint','6',''),(3652,833,'图片','img',8,0,0,0,'',1,0,'center','','','','',3277,'','','','varchar','250',''),(3653,833,'订单号','ordersn',1,1,1,0,'',1,0,'center','','','','',3276,'','','','varchar','250',''),(3654,833,'商品id','goods_id',1,0,0,0,'',1,0,'center','','','','',3279,'','','','varchar','250',''),(3655,833,'订单类型','type',2,1,1,0,'取件|1,寄件|2,超市食堂|3,无所不能/饮品|4',1,0,'center','','','','',3278,'','','','smallint','6',''),(3656,833,'订单备注','remarks',1,0,0,0,'',1,0,'center','','','','',3281,'','','','varchar','250',''),(3657,833,'接单员性别限制','sex_limit',3,0,1,0,'无限制|0|primary,男|1|success,女|2|warning',1,0,'center','','','','',3283,'','','','smallint','6',''),(3658,833,'物品重量','weight',1,0,0,0,'',1,0,'center','','','','',3284,'','','','varchar','250',''),(3659,833,'件数','express_num',20,0,0,0,'',1,0,'center','','','','',3285,'','','','int','11',''),(3660,833,'开始时间','start_time',12,0,0,0,'',1,0,'center','','','','',3286,'','','Y-m-d H:i:s','int','11',''),(3661,833,'预计上门时间','door_time',12,0,0,0,'',1,0,'center','','','','',3287,'','','Y-m-d H:i:s','int','11',''),(3662,833,'发起用户openid','start_openid',1,0,0,0,'',1,0,'center','','','','',3288,'','','','varchar','250',''),(3663,833,'抢单用户openid','end_openid',1,0,0,0,'',1,0,'center','','','','',3289,'','','','varchar','250',''),(3664,833,'收货姓名','sh_name',1,1,0,0,'',1,0,'center','','','','',3290,'','','','varchar','250',''),(3665,833,'收货性别','sh_sex',2,0,0,0,'男|1|success,女|2|warning',1,0,'center','','','','',3291,'','','','smallint','6',''),(3666,833,'收货联系手机号','sh_phone',1,0,0,0,'',1,0,'center','','','','',3292,'','','','varchar','250',''),(3667,833,'收货学校','sh_school',1,0,0,0,'',1,0,'center','','','','',3293,'','','','varchar','250',''),(3668,833,'具体收货地址','sh_addres',1,0,0,0,'',1,0,'center','','','','',3294,'','','','varchar','250',''),(3669,833,'服务人数','service_num',20,0,0,0,'',1,0,'center','','','','',3295,'','','','int','11',''),(3932,795,'支付状态','paystate',20,1,0,0,'未支付|0,已支付|1,已完成|2,退款中|3,退款完成|4',1,1,'center','','','','',3932,'','','','int','11',''),(3672,833,'取货具体地址','qu_addres',1,0,0,0,'',1,0,'center','','','','',3298,'','','','varchar','250',''),(3930,793,'库存','stock',1,0,0,0,'',1,1,'center','','','','',3930,'','','','varchar','250',''),(3929,793,'新旧程度','degree',1,0,0,0,'',1,1,'center','','','','',3929,'','','','varchar','250',''),(3675,833,'优惠券id','co_id',1,0,0,0,'',1,0,'center','','','','',3301,'','','','varchar','250',''),(3676,833,'名称','co_name',1,0,0,0,'',1,0,'center','','','','',3302,'','','','varchar','250',''),(3677,833,'商品预估价','guess_price',1,0,0,0,'',1,0,'center','','','','',3303,'','','','varchar','250',''),(3678,833,'商家id','store_id',1,0,0,0,'',1,0,'center','','','','',3304,'','','','varchar','250',''),(3679,833,'优惠券金额','y_money',13,1,0,0,'',1,0,'center','','','','',3305,'','','','decimal','10',''),(3680,833,'总价（跑腿费）','total',13,1,0,0,'',1,0,'center','','','','',3306,'','','','decimal','10',''),(3681,833,'实付金额','t_money',13,1,0,0,'',1,0,'center','','','','',3307,'','','','decimal','10',''),(3682,833,'跑腿被抽取的手续费','s_money',13,0,0,0,'',1,0,'center','','','','',3308,'','','','decimal','10',''),(3683,833,'学校收取手续费','fxs_money',13,0,0,0,'',1,0,'center','','','','',3309,'','','','decimal','10',''),(3684,833,'商家抽成费用','store_money',13,0,0,0,'',1,0,'center','','','','',3310,'','','','decimal','10',''),(3685,833,'商品价格','food_money',13,0,0,0,'',1,0,'center','','','','',3311,'','','','decimal','10',''),(3686,833,'创建时间','createtime',12,1,1,0,'',1,0,'center','','','','',3312,'','','Y-m-d H:i:s','int','11',''),(3687,833,'更新时间','updatetime',12,0,0,0,'',1,0,'center','','','','',3313,'','','Y-m-d H:i:s','int','11',''),(3688,833,'订单过期时间','out_time',12,0,0,0,'',1,0,'center','','','','',3314,'','','Y-m-d H:i:s','int','11',''),(3689,833,'取消时间','cancel_time',12,0,0,0,'',1,0,'center','','','','',3315,'','','Y-m-d H:i:s','int','11',''),(3690,833,'超时','out_time_num',25,0,0,0,'',1,0,'center','','','','',3316,'','','','int','11',''),(3691,833,'商品详情','good_details',16,0,0,0,'',1,0,'center','','','','',3317,'','','','text','0',''),(3692,833,'取消抢单来自哪一方:user:下单者,rider:骑手','cancel_from',1,0,0,0,'',1,0,'center','','','','',3318,'','','','varchar','250',''),(3693,833,'拒绝原因','refuse_reason',1,0,0,0,'',1,0,'center','','','','',3319,'','','','varchar','250',''),(3694,833,'凭证','proof',1,0,0,0,'',1,0,'center','','','','',3320,'','','','varchar','250',''),(3695,833,'是否拒绝','is_refuse',20,0,0,0,'',1,0,'center','','','','',3321,'','','','int','11',''),(3696,833,'标题','title',1,0,0,0,'',1,0,'center','','','','',3322,'','','','varchar','250',''),(3697,833,'开始时间是否显示','is_start_show',20,0,0,0,'',1,0,'center','','','','',3323,'','','','int','11',''),(3701,834,'商品id','m_id',20,NULL,1,0,'',1,1,NULL,NULL,'','','',3701,'',NULL,'','int','11',''),(3700,834,'用户id','u_id',24,NULL,1,0,'',1,1,NULL,NULL,'','','',3700,'',NULL,'','varchar','250',''),(3702,834,'添加事件','create_time',12,NULL,0,0,'',1,1,NULL,NULL,'','','',3702,'',NULL,'','int','11',''),(3703,795,'支付时间','pay_time',12,1,1,0,'',1,1,'center','','','','',3703,'','','Y-m-d H:i:s','int','11',''),(3708,836,'添加时间','create_time',12,NULL,0,0,'',0,1,NULL,NULL,'','','',3708,'',NULL,'','int','11',''),(3712,836,'商品id','m_id',1,NULL,0,0,'',1,1,NULL,NULL,'','','',3712,'',NULL,'','varchar','250','INDEX'),(3709,836,'平台id','wxapp_id',1,NULL,1,0,'',1,1,NULL,NULL,'','','',3709,'',NULL,'','varchar','250',''),(3710,834,'学校id','s_id',20,NULL,1,0,'',1,1,NULL,NULL,'','','',3710,'',NULL,'','int','11',''),(3711,834,'平台id','wxapp_id',20,NULL,1,0,'',1,1,NULL,NULL,'','','',3711,'',NULL,'','int','11',''),(3713,795,'购买用户id','purchase',1,1,0,0,'',1,1,'center','','','','',3713,'','','','varchar','250',''),(3714,803,'购买用户id','purchase',1,NULL,1,0,'',1,0,NULL,NULL,'','','',3714,'',NULL,'','varchar','250',''),(3715,793,'状态','state',2,1,1,0,'上架|0,下架|1',1,1,'center','','','','',3715,'','','','smallint','6',''),(3716,828,'状态','state',2,NULL,1,0,'',1,0,NULL,NULL,'','','',3716,'',NULL,'','smallint','6',''),(3717,809,'分类图片','type_image',8,1,0,0,'',1,1,'center','','','','',3717,'','','','varchar','250',''),(3718,815,'手机号','phone',1,0,0,0,'',1,1,'center','','','','',3718,'','','','varchar','250',''),(3719,815,'日期','pick_date',12,0,0,0,'',1,1,'center','','','','',3719,'','','','int','11',''),(3720,815,'认领方式','claim_method',1,0,0,0,'',1,1,'center','','','','',3720,'','','','varchar','250',''),(3721,815,'备注','remarks',6,0,0,0,'',1,1,'center','','','','',3721,'','','','text','0',''),(3722,838,'编号','info_id',1,1,0,NULL,NULL,0,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3723,838,'学校id','s_id',15,0,1,0,'',0,0,'center','','','','',3425,'','','','int','11',''),(3724,838,'平台id','wxapp_id',15,0,1,0,'',0,0,'center','','','','',3426,'','','','int','11',''),(3725,838,'物品名称','title',1,1,1,1,'',1,0,'center','','','notEmpty','',3427,'','','','varchar','250',''),(3726,838,'地点','address',1,1,1,1,'',1,0,'center','','','','',3428,'','','','varchar','250',''),(3727,838,'用户id','u_id',1,2,0,0,'',1,0,'center','','','','',3429,'','','','varchar','250',''),(3728,838,'所属分类','type',2,1,1,0,'失物招领|1|primary,寻物启事|2|success',1,0,'center','','','notEmpty','',3430,'','','','smallint','6',''),(3729,838,'媒体类型','media_type',2,1,1,0,'视频|1| primary,图片|2|succes',1,0,'center','','','','',3431,'','','','smallint','6',''),(3730,838,'创建时间','createtime',12,1,1,0,'',1,0,'center','','','','',3432,'','','','int','11',''),(3731,838,'手机号','phone',1,0,0,0,'',1,0,'center','','','','',3718,'','','','varchar','250',''),(3732,838,'日期','pick_date',12,0,0,0,'',1,0,'center','','','','',3719,'','','','int','11',''),(3733,838,'认领方式','claim_method',1,0,0,0,'',1,0,'center','','','','',3720,'','','','varchar','250',''),(3734,838,'备注','remarks',6,0,0,0,'',1,0,'center','','','','',3721,'','','','text','0',''),(3749,840,'内容','content',6,1,0,0,'',1,0,'center','','','notEmpty','',3438,'','','','text','0',''),(3748,840,'信息名称	','title',1,1,0,0,'',0,0,'center','','','','',3437,'','','','varchar','250',''),(3747,840,'所属信息','info_id',2,2,1,0,'',1,0,'center','','','','',3436,'select info_id,title from gc_zh_info','','','smallint','6',''),(3746,840,'平台id','wxapp_id',15,0,1,0,'',0,0,'center','','','','',3435,'','','','int','11',''),(3745,840,'学校id','s_id',15,0,1,0,'',0,0,'center','','','','',3434,'','','','int','11',''),(3744,840,'编号','id',1,1,0,NULL,NULL,0,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3742,816,'用户id','u_id',1,0,0,0,'',0,1,'center','','','','',3742,'','','','varchar','250',''),(3855,820,'用户id','u_id',1,0,0,0,'',0,1,'center','','','','',3855,'','','','varchar','250',''),(3743,816,'父级id','p_id',1,0,0,0,'',0,1,'center','','','','',3743,'','','','varchar','250',''),(3750,840,'创建时间','createtime',12,1,0,0,'',1,0,'center','','','','',3439,'','','','int','11',''),(3751,840,'用户id','u_id',1,0,0,0,'',0,0,'center','','','','',3742,'','','','varchar','250',''),(3752,840,'父级id','p_id',1,0,0,0,'',0,0,'center','','','','',3743,'','','','varchar','250',''),(3753,841,'编号','class_id',1,1,0,NULL,NULL,0,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3754,841,'学校id','s_id',15,0,1,0,'',0,0,'center','','','','',3441,'','','','int','11',''),(3755,841,'平台id','wxapp_id',15,0,1,0,'',0,0,'center','','','','',3442,'','','','int','11',''),(3756,841,'分类名称','class_name',1,1,0,1,'',1,0,'center','','','notEmpty','',3443,'','','','varchar','250',''),(3757,841,'创建时间','createtime',12,1,1,0,'',1,0,'center','','','','',3444,'','','','int','11',''),(3787,844,'创建时间','createtime',12,1,1,0,'',1,0,'center','','','','',3461,'','','','int','11',''),(3785,844,'文章内容','content',1,1,0,0,'',0,0,'center','','','','',3459,'','','','varchar','250',''),(3786,844,'内容','contents',6,1,0,0,'',1,0,'center','','','','',3460,'','','','text','0',''),(3784,844,'所属文章','article_id',2,2,1,0,'',1,0,'center','','','notEmpty','',3458,'select article_id,content from gc_zh_articles','','','smallint','6',''),(3783,844,'平台id','wxapp_id',15,0,1,0,'',0,0,'center','','','','',3457,'','','','int','11',''),(3781,844,'编号','id',1,1,0,NULL,NULL,0,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3782,844,'学校id','s_id',15,0,1,0,'',0,0,'center','','','','',3456,'','','','int','11',''),(3780,820,'父级id','p_id',20,0,0,0,'',0,1,'center','','','','',3780,'','','','int','11',''),(3768,819,'图片','image',1,2,0,0,'',1,1,'center','','','','',3768,'','','','varchar','500',''),(3769,843,'编号','article_id',1,1,0,NULL,NULL,0,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3770,843,'学校id','s_id',15,0,1,0,'',0,0,'center','','','','',3446,'','','','int','11',''),(3771,843,'平台id','wxapp_id',15,0,1,0,'',0,0,'center','','','','',3447,'','','','int','11',''),(3772,843,'所属分类','class_id',2,2,1,0,'',1,0,'center','','','','',3448,'select class_id,class_name from gc_zh_forum_class','','','smallint','6',''),(3773,843,'分类名称','class_name',1,1,0,0,'',0,0,'center','','','','',3449,'','','','varchar','250',''),(3774,843,'用户id','u_id',1,2,0,0,'',0,0,'center','','','','',3450,'','','','varchar','250',''),(3775,843,'内容','content',6,1,0,0,'',1,0,'center','','','notEmpty','',3451,'','','','text','0',''),(3776,843,'媒体类型','media_type',2,1,1,0,'视频|1|success,图片|2|warning',1,0,'center','','','','',3452,'','','','smallint','6',''),(3777,843,'状态','status',3,1,1,0,'通过|1|success,拒绝|2|warning',1,0,'center','','','','',3453,'','','','smallint','6',''),(3778,843,'创建时间','createtime',12,1,1,0,'',1,0,'center','','','','',3454,'','','','int','11',''),(3779,843,'图片','image',1,2,0,0,'',0,0,'center','','','','',3768,'','','','varchar','500',''),(3788,844,'父级id','p_id',20,0,0,0,'',0,0,'center','','','','',3780,'','','','int','11',''),(3789,845,'创建时间','create_time',12,1,0,0,'',1,0,'center','','','','',3474,'','','','int','11',''),(3790,845,'openid','openid',1,0,0,0,'',1,0,'center','','','','',3060,'','','','varchar','250',''),(3791,845,'头像','avatar',8,1,0,0,'',1,0,'center','','','','',3062,'','','','varchar','250',''),(3792,845,'昵称','nickname',1,1,1,0,'',1,0,'center','','','','',3061,'','','','varchar','250',''),(3793,845,'平台id','wxapp_id',15,0,1,0,'',1,0,'center','','','','',3059,'','','','varchar','250',''),(3794,845,'性别','t_sex',3,1,0,0,'女|1|success,男|0|danger',1,0,'center','','','','',3068,'','','','smallint','6',''),(3795,845,'编号','u_id',1,1,0,NULL,NULL,0,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3796,845,'手机号','phone',1,1,1,0,'',1,0,'center','','','','/^1[3456789]\\d{9}$/',3473,'','','','varchar','250',''),(3797,845,'姓名','t_name',1,1,1,0,'',1,0,'center','','','','',3472,'','','','varchar','250',''),(3798,845,'到期时间','deadtime',1,0,0,0,'',1,0,'center','','','','',3141,'','','','varchar','250',''),(3799,845,'所属学校名称','s_name',1,0,0,0,'',0,0,'center','','','','',3065,'','','','varchar','250',''),(3800,845,'余额','balance',13,1,0,0,'',1,0,'center','','','','',3063,'','','','decimal','10',''),(3801,845,'骑手审核状态','run_status',3,0,0,0,'未申请审核|0,审核中|1,审核通过|2,审核拒绝|-1',1,0,'center','','','','',3067,'','','','smallint','6',''),(3802,845,'认证学校id','auth_sid',15,0,0,0,'',1,0,'center','','','','',3069,'select s_id,s_name from gc_school','','','varchar','250',''),(3803,845,'所属学校','s_id',15,0,1,0,'',0,0,'center','','','','',3064,'select s_id,s_name from gc_school','','','varchar','250',''),(3804,846,'附件地址','attach_file',1,1,0,0,'',1,1,'center','','','','',3282,'','','','varchar','250',''),(3805,846,'编号','id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3806,846,'学校id','s_id',15,0,1,0,'',1,1,'center','','','','',3226,'','','','varchar','250',''),(3807,846,'平台id','wxapp_id',15,0,1,0,'',1,1,'center','','','','',3227,'','','','varchar','250',''),(3808,846,'订单的完成状态','status',1,1,1,0,'未支付|1,待接单|2,待取货|3,到送达|7,已完成|4,已过期|5,未完成|6,已取消|8,等待取消抢单|9,',1,1,'center','','','','',3276,'','','','tinyint','2',''),(3809,846,'图片','img',8,1,0,0,'',1,1,'center','','','','',3277,'','','','varchar','250',''),(3810,846,'订单号','ordersn',1,1,1,0,'',1,1,'center','','','','',3278,'','','','varchar','250',''),(3811,846,'商品id','goods_id',1,1,0,0,'',1,1,'center','','','','',3279,'','','','varchar','250',''),(3812,846,'订单类型','type',2,1,1,0,'取件|1,寄件|2,超市食堂|3,无所不能/饮品|4',1,1,'center','','','','',3280,'','','','smallint','6',''),(3813,846,'订单备注','remarks',1,1,0,0,'',1,1,'center','','','','',3281,'','','','varchar','250',''),(3814,846,'接单员性别限制','sex_limit',2,1,0,0,'男|1|success,女|2|warning',1,1,'center','','','','',3283,'','','','smallint','6',''),(3815,846,'物品重量','weight',1,1,0,0,'',1,1,'center','','','','',3284,'','','','varchar','250',''),(3816,846,'件数','express_num',20,1,0,0,'',1,1,'center','','','','',3285,'','','','int','11',''),(3817,846,'开始时间','start_time',12,1,0,0,'',1,1,'center','','','','',3286,'','','Y-m-d H:i:s','int','11',''),(3818,846,'预计上门时间','door_time',12,1,0,0,'',1,1,'center','','','','',3287,'','','Y-m-d H:i:s','int','11',''),(3819,846,'发起用户openid','start_openid',1,1,0,0,'',1,1,'center','','','','',3288,'','','','varchar','250',''),(3820,846,'抢单用户openid','end_openid',1,1,0,0,'',1,1,'center','','','','',3289,'','','','varchar','250',''),(3821,846,'收获姓名','sh_name',1,1,0,0,'',1,1,'center','','','','',3290,'','','','varchar','250',''),(3822,846,'收货性别','sh_sex',2,1,0,0,'男|1|success,女|2|warning',1,1,'center','','','','',3291,'','','','smallint','6',''),(3823,846,'收获联系手机号','sh_phone',1,1,0,0,'',1,1,'center','','','','',3292,'','','','varchar','250',''),(3824,846,'收获学校','sh_school',1,1,0,0,'',1,1,'center','','','','',3293,'','','','varchar','250',''),(3825,846,'具体收货地址','sh_addres',1,1,0,0,'',1,1,'center','','','','',3294,'','','','varchar','250',''),(3826,846,'服务人数','service_num',20,1,0,0,'',1,1,'center','','','','',3295,'','','','int','11',''),(3827,846,'收货经度参数','sh_longitude',1,1,0,0,'',1,1,'center','','','','',3296,'','','','varchar','250',''),(3828,846,'收货纬度参数','sh_latitude',1,1,0,0,'',1,1,'center','','','','',3297,'','','','varchar','250',''),(3829,846,'取货具体地址','qu_addres',1,1,0,0,'',1,1,'center','','','','',3298,'','','','varchar','250',''),(3830,846,'取货经度参数','qu_longitude',1,1,0,0,'',1,1,'center','','','','',3299,'','','','varchar','250',''),(3831,846,'取货纬度参数','qu_latitude',1,1,0,0,'',1,1,'center','','','','',3300,'','','','varchar','250',''),(3832,846,'优惠券id','co_id',1,1,0,0,'',1,1,'center','','','','',3301,'','','','int','11',''),(3833,846,'名称','co_name',1,1,0,0,'',1,1,'center','','','','',3302,'','','','varchar','250',''),(3834,846,'商品预估价','guess_prcie',1,1,0,0,'',1,1,'center','','','','',3303,'','','','varchar','250',''),(3835,846,'商家id','store_id',1,1,0,0,'',1,1,'center','','','','',3304,'','','','int','11',''),(3836,846,'优惠券金额','y_money',13,1,0,0,'',1,1,'center','','','','',3305,'','','','decimal','10',''),(3837,846,'总价（跑腿费）','total',13,1,0,0,'',1,1,'center','','','','',3306,'','','','decimal','10',''),(3838,846,'实付金额','t_money',13,1,0,0,'',1,1,'center','','','','',3307,'','','','decimal','10',''),(3839,846,'跑腿被抽取的手续费','s_money',13,1,0,0,'',1,1,'center','','','','',3308,'','','','decimal','10',''),(3840,846,'学校收取手续费','fxs_money',13,1,0,0,'',1,1,'center','','','','',3309,'','','','decimal','10',''),(3841,846,'商家抽成费用','store_money',13,1,0,0,'',1,1,'center','','','','',3310,'','','','decimal','10',''),(3842,846,'商品价格','food_money',13,1,0,0,'',1,1,'center','','','','',3311,'','','','decimal','10',''),(3843,846,'创建时间','createtime',12,1,0,0,'',1,1,'center','','','','',3312,'','','Y-m-d H:i:s','int','11',''),(3844,846,'更新时间','updatetime',12,1,0,0,'',1,1,'center','','','','',3313,'','','Y-m-d H:i:s','int','11',''),(3845,846,'订单过期时间','out_time',12,1,0,0,'',1,1,'center','','','','',3314,'','','Y-m-d H:i:s','int','11',''),(3846,846,'取消时间','cancel_time',12,1,0,0,'',1,1,'center','','','','',3315,'','','Y-m-d H:i:s','int','11',''),(3847,846,'超时','out_time_num',25,1,0,0,'',1,1,'center','','','','',3316,'','','','int','11',''),(3848,846,'商品详情','good_details',16,1,0,0,'',1,1,'center','','','','',3317,'','','','text','0',''),(3849,846,'取消抢单来自哪一方:user:下单者,rider:骑手','cancel_from',1,1,0,0,'',1,1,'center','','','','',3318,'','','','varchar','250',''),(3850,846,'拒绝原因','refuse_reason',1,1,0,0,'',1,1,'center','','','','',3319,'','','','varchar','250',''),(3851,846,'凭证','proof',1,1,0,0,'',1,1,'center','','','','',3320,'','','','varchar','250',''),(3852,846,'是否拒绝','is_refuse',20,1,0,0,'',1,1,'center','','','','',3321,'','','','int','11',''),(3853,846,'标题','title',1,1,0,0,'',1,1,'center','','','','',3322,'','','','varchar','250',''),(3854,846,'开始时间是否显示','is_start_show',20,1,0,0,'',1,1,'center','','','','',3323,'','','','int','11',''),(3856,844,'用户id','u_id',1,NULL,0,0,'',0,0,NULL,NULL,'','','',3856,'',NULL,'','varchar','250',''),(3858,823,'寄件取货联系电话','qu_phone',1,NULL,0,0,'',0,1,NULL,NULL,'','','',3858,'',NULL,'','varchar','20',''),(3859,823,'寄件取货姓名','qu_name',1,NULL,0,0,'',0,1,NULL,NULL,'','','',3859,'',NULL,'','varchar','250',''),(3860,823,'寄件 取货  性别 ','qu_sex',20,NULL,0,0,'',0,1,NULL,NULL,'','','',3860,'',NULL,'','tinyint','2',''),(3861,815,'视频','video',1,0,0,0,'',1,1,'center','','','','',3861,'','','','varchar','250',''),(3862,843,'视频','video',1,NULL,0,0,'',0,0,NULL,NULL,'','','',3862,'',NULL,'','varchar','250',''),(3863,843,'是否匿名','is_anonymous',1,NULL,0,0,'',0,0,NULL,NULL,'','','',3863,'',NULL,'','varchar','250',''),(3864,819,'视频','video',1,0,0,0,'',1,1,'center','','','','',3864,'','','','varchar','250',''),(3865,819,'是否匿名','is_anonymous',1,0,0,0,'',0,1,'center','','','','',3865,'','','','varchar','250',''),(3866,823,'用户支付时间','pay_time',20,NULL,0,0,'',0,1,NULL,NULL,'','','',3866,'',NULL,'','int','11',''),(3867,819,'评论数','comments_num',1,0,0,0,'',0,1,'center','','','','',3867,'','','','varchar','250',''),(3868,819,'点赞数','likes_num',1,0,0,0,'',0,1,'center','','','','',3868,'','','','varchar','250',''),(3869,819,'收藏数','collections_num',1,0,0,0,'',0,1,'center','','','','',3869,'','','','varchar','250',''),(3870,843,'评论数','comments_num',1,NULL,0,0,'',0,0,NULL,NULL,'','','',3870,'',NULL,'','varchar','250',''),(3871,843,'点赞数','likes_num',1,NULL,0,0,'',0,0,NULL,NULL,'','','',3871,'',NULL,'','varchar','250',''),(3872,843,'收藏数','collections_num',1,NULL,0,0,'',0,0,NULL,NULL,'','','',3872,'',NULL,'','varchar','250',''),(3873,847,'平台id','wxapp_id',15,NULL,0,0,'',0,1,NULL,NULL,'','','',3873,'',NULL,'','varchar','250',''),(3874,847,'学校id','s_id',15,NULL,0,0,'',0,1,NULL,NULL,'','','',3874,'',NULL,'','varchar','250',''),(3875,847,'用户id','u_id',1,NULL,0,0,'',0,1,NULL,NULL,'','','',3875,'',NULL,'','varchar','250',''),(3876,847,'文章id','articles_id',1,NULL,0,0,'',0,1,NULL,NULL,'','','',3876,'',NULL,'','varchar','250',''),(3877,847,'状态','status',1,NULL,0,0,'',0,1,NULL,NULL,'','','',3877,'',NULL,'','varchar','250',''),(3878,847,'创建时间','createtime',12,NULL,0,0,'',0,1,NULL,NULL,'','','',3878,'',NULL,'','int','11',''),(3879,848,'编号','business_id',1,1,0,NULL,NULL,0,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3880,848,'学校id','s_id',15,0,1,0,'',0,0,'center','','','','',3390,'','','','int','11',''),(3881,848,'平台id','wxapp_id',15,0,1,0,'',0,0,'center','','','','',3391,'','','','int','11',''),(3882,848,'微信管理员昵称','wxadmin_name',1,1,1,0,'',1,0,'center','','','','',3392,'','','','varchar','250',''),(3883,848,'商家分类','type_id',2,2,1,0,'',1,0,'center','','','','',3393,'select type_id,type_name from gc_zh_business_type','','','smallint','6',''),(3884,848,'分类名称','type_name',1,1,0,0,'',0,0,'center','','','','',3394,'','','','varchar','250',''),(3885,848,'商家营业开始时间','start_time',1,0,0,0,'',1,0,'center','请输入营业开始时间。例: 08:30（冒号为英文冒号）','','','',3395,'','','','varchar','250',''),(3886,848,'商家打烊时间','end_time',1,0,0,0,'',1,0,'center','请输入打烊时间。例：20:30（冒号为英文冒号）','','','',3396,'','','','varchar','250',''),(3887,848,'商家名称','business_name',1,1,1,0,'',1,0,'center','','','notEmpty','',3397,'','','','varchar','250',''),(3888,848,'商家地址','business_address',1,1,1,0,'',1,0,'center','','','notEmpty','',3398,'','','','varchar','250',''),(3889,848,'商家电话','phone',1,1,1,0,'',1,0,'center','','','','',3399,'','','','varchar','250',''),(3890,848,'到期时间','expire_time',7,0,0,0,'',1,0,'center','','','','',3400,'','','','int','11',''),(3891,848,'商家图片','business_image',8,1,0,0,'',1,0,'center','','','','',3401,'','','','varchar','250',''),(3892,848,'营业状态','status',3,1,1,0,'营业|1|success,打烊|2|warning',1,0,'center','','','notEmpty','',3402,'','','','smallint','6',''),(3893,848,'商家类型','type',3,1,1,0,'校内|1|success,校外|2|warning',1,0,'center','','','notEmpty','',3403,'','','','smallint','6',''),(3894,848,'创建时间','createtime',12,1,1,0,'',1,0,'center','','','','',3404,'','','','int','11',''),(3895,849,'编号','goods_type_id',1,1,0,NULL,NULL,0,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3896,849,'学校id','s_id',15,0,1,0,'',0,0,'center','','','','',3406,'','','','int','11',''),(3897,849,'平台id','wxapp_id',15,0,1,0,'',0,0,'center','','','','',3407,'','','','int','11',''),(3898,849,'所属商家','business_id',2,2,1,0,'',1,0,'center','','','','',3408,'select business_id,business_name from gc_zh_business','','','smallint','6',''),(3899,849,'商家名称','business_name',1,1,0,0,'',0,0,'center','','','','',3409,'','','','varchar','250',''),(3900,849,'分类名称','goods_type_name',1,1,1,0,'',1,0,'center','','','notEmpty','',3410,'','','','varchar','250',''),(3901,849,'创建时间','createtime',12,1,1,0,'',1,0,'center','','','','',3411,'','','','int','11',''),(3902,850,'编号','id',1,1,0,NULL,NULL,0,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3903,850,'学校id','s_id',15,0,1,0,'',0,0,'center','','','','',3413,'','','','int','11',''),(3904,850,'平台id','wxapp_id',15,0,1,0,'',0,0,'center','','','','',3414,'','','','int','11',''),(3905,850,'所属分类','goods_type_id',2,2,1,0,'',1,0,'center','','','notEmpty','',3415,'select goods_type_id,goods_type_name from gc_zh_goods_type','','','smallint','6',''),(3906,850,'分类名称','goods_type_name',1,1,0,0,'',0,0,'center','','','','',3416,'','','','varchar','250',''),(3907,850,'所属商家','business_id',2,2,1,0,'',1,0,'center','','','notEmpty','',3417,'select business_id,business_name from gc_zh_business','','','smallint','6',''),(3908,850,'商家名称','business_name',1,1,0,0,'',0,0,'center','','','','',3418,'','','','varchar','250',''),(3909,850,'商品名称','goods_name',1,1,1,1,'',1,0,'center','','','notEmpty','',3419,'','','','varchar','250',''),(3910,850,'商品价格','price',13,1,1,0,'',1,0,'center','','','','',3420,'','','','decimal','10',''),(3911,850,'商品图片','goods_img',8,1,0,0,'',1,0,'center','','','','',3421,'','','','varchar','250',''),(3912,850,'状态','status',3,1,1,0,'上架|1|success,下架|0|danger,草稿|2|info',1,0,'center','','','','',3422,'','','2','smallint','6',''),(3913,850,'创建时间','createtime',12,1,1,0,'',1,0,'center','','','','',3423,'','','','int','11',''),(3914,770,'收货地址是否显示','is_address_show',3,0,0,0,'是|1|success,否|0|danger',1,1,'center','','','','',3914,'','万能任务设置','','smallint','6',''),(3915,770,'收货地址是否必填','is_address_must',3,0,0,0,'是|1|success,否|0|danger',1,1,'center','','','','',3915,'','万能任务设置','','smallint','6',''),(3916,770,'附件是否显示','is_attach_show',3,0,0,0,'是|1|success,否|0|danger',1,1,'center','','','','',3916,'','万能任务设置','','smallint','6',''),(3917,770,'附件是否必填','is_attach_must',3,0,0,0,'是|1|success,否|0|danger',1,1,'center','','','','',3917,'','万能任务设置','','smallint','6',''),(3918,770,'服务时间是否显示','is_servicetime_show',3,0,0,0,'是|1|success,否|0|danger',1,1,'center','','','','',3918,'','万能任务设置','','smallint','6',''),(3919,770,'服务人数是否显示','is_servicenum_show',3,0,0,0,'是|1|success,否|0|danger',1,1,'center','','','','',3919,'','万能任务设置','1','smallint','6',''),(3920,793,'轮播图','rotation',9,0,0,0,'',1,1,'center','','','','',3920,'','','','text','0',''),(3921,823,'取消原因','cancel_reason',1,NULL,0,0,'',1,1,NULL,NULL,'','','',3921,'',NULL,'','varchar','250',''),(3922,776,'跑腿总佣金','brokerage',13,1,0,0,'',1,1,'center','','','','',3922,'','','','decimal','10',''),(3923,851,'编号','type_id',1,1,0,0,'',0,0,'center','','','','',1,'','','','int','11',''),(3924,851,'学校id','s_id',15,0,1,0,'',0,0,'center','','','','',3385,'','','','int','11',''),(3925,851,'平台id','wxapp_id',1,0,1,0,'',0,0,'center','','','','',3386,'','','','varchar','250',''),(3926,851,'分类名称','type_name',1,1,1,0,'',1,0,'center','','','notEmpty','',3387,'','','','varchar','250',''),(3927,851,'创建时间','createtime',12,1,1,0,'',1,0,'center','','','','',3388,'','','','int','11',''),(3928,851,'分类图片','type_image',8,0,0,0,'',1,0,'center','','','','',3717,'','','','varchar','250',''),(3940,853,'添加时间','create_time',12,1,0,0,'',1,1,'center','','','','',3945,'','','Y-m-d H:i:s','int','11',''),(3941,853,'状态','state',3,1,0,0,'通过|1,提现中|0,拒绝|2',1,1,'center','','','','',3941,'','','','smallint','6',''),(3942,853,'金额','pay',13,1,0,0,'',1,1,'center','','','','',3942,'','','','decimal','10',''),(3943,853,'支付宝姓名','alipay_name',1,1,1,0,'',1,1,'center','','','','',3943,'','','','varchar','250',''),(3944,853,'支付宝账户','alipay_account',1,1,0,0,'',1,1,'center','','','','',3944,'','','','varchar','250',''),(3945,854,'编号','id',1,1,0,NULL,NULL,1,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3946,854,'平台id','wxapp_id',15,0,1,0,'',1,0,'center','','','','',3938,'','','','varchar','250',''),(3947,854,'学校id','s_id',15,0,1,0,'',1,0,'center','','','','',3939,'','','','varchar','250',''),(3948,854,'添加时间','create_time',12,1,0,0,'',1,0,'center','','','','',3945,'','','Y-m-d H:i:s','int','11',''),(3949,854,'状态','state',3,1,0,0,'通过|1,提现中|0,拒绝|2',1,0,'center','','','','',3941,'','','','smallint','6',''),(3950,854,'金额','pay',13,1,0,0,'',1,0,'center','','','','',3942,'','','','decimal','10',''),(3951,854,'支付宝姓名','alipay_name',1,1,1,0,'',1,0,'center','','','','',3943,'','','','varchar','250',''),(3952,854,'支付宝账户','alipay_account',1,1,0,0,'',1,0,'center','','','','',3944,'','','','varchar','250',''),(3953,818,'排序','sort',1,1,0,0,'',1,1,'center','','','','',3443,'','','0','varchar','250',''),(3954,770,'公众号appid','mp_appid',1,0,0,0,'',1,1,'center','','','','',1,'','公众号配置','','varchar','250',''),(3955,770,'公众号appsecret','mp_secret',1,0,0,0,'',1,1,'center','','','','',2,'','公众号配置','','varchar','250',''),(3956,855,'id','id',1,NULL,0,0,'',1,0,NULL,NULL,'','','',3956,'',NULL,'','varchar','250',''),(3957,855,'平台id','wxapp_id',1,NULL,1,0,'',1,0,NULL,NULL,'','','',3957,'',NULL,'','varchar','250',''),(3958,855,'用户id','uid',24,NULL,1,0,'',1,0,NULL,NULL,'','','',3958,'',NULL,'','varchar','250',''),(3959,855,'类型','type',1,NULL,0,0,'',1,0,NULL,NULL,'','','',3959,'',NULL,'','varchar','250',''),(3960,855,'金额','price',1,NULL,0,0,'',1,0,NULL,NULL,'','','',3960,'',NULL,'','varchar','250',''),(3961,855,'操作','operate',1,NULL,1,0,'',1,0,NULL,NULL,'','','',3961,'',NULL,'','varchar','250',''),(3962,855,'备注','remark',1,NULL,0,0,'',1,0,NULL,NULL,'','','',3962,'',NULL,'','varchar','250',''),(3963,855,'添加时间','addtime',1,NULL,0,0,'',1,0,NULL,NULL,'','','',3963,'',NULL,'','varchar','250',''),(3964,857,'编号','id',1,1,0,NULL,NULL,0,1,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3965,857,'金额','price',13,1,0,0,'',1,1,'center','','','notEmpty','/(^[1-9]([0-9]+)?(\\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\\.[0-9]([0-9])?$)/',3965,'','','','decimal','10',''),(3966,857,'置顶天数','day',20,1,0,0,'',1,1,'center','','','notEmpty','/^[0-9]*$/',3966,'','','','int','11',''),(3967,857,'平台id','wxapp_id',15,0,1,0,'',1,1,'center','','','','',3967,'','','','varchar','250',''),(3968,857,'学校id','s_id',15,1,0,0,'',1,1,'center','','','','',3968,'','','','varchar','250',''),(3969,857,'添加时间','addtime',12,1,0,0,'',1,1,'center','','','','',3969,'','','','int','11',''),(3970,757,'赏金抽成','reward_rate',1,1,0,0,'',1,1,'center','','','','',2907,'','','','varchar','250',''),(3971,770,'打赏是否开启','is_open_reward',3,0,0,0,'开启|1|success,关闭|0|danger',1,1,'center','','','','',3971,'','开关设置','1','smallint','6',''),(3972,770,'发帖须知','posting_instructions',16,0,0,0,'',1,1,'center','','','','',3972,'','图文设置','','text','0',''),(3973,818,'图标','icon',8,1,0,0,'',1,1,'center','','','','',3953,'','','','varchar','250',''),(3974,818,'图片','img',8,1,0,0,'',1,1,'center','','','','',3973,'','','','varchar','250',''),(3975,858,'编号','id',1,1,0,NULL,NULL,0,0,'center',NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,'int','11',NULL),(3976,858,'金额','price',13,1,0,0,'',1,0,'center','','','notEmpty','/(^[1-9]([0-9]+)?(\\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\\.[0-9]([0-9])?$)/',3965,'','','','decimal','10',''),(3977,858,'置顶天数','day',20,1,0,0,'',1,0,'center','','','notEmpty','/^[0-9]*$/',3966,'','','','int','11',''),(3978,858,'平台id','wxapp_id',1,0,1,0,'',1,0,'center','','','','',3967,'','','','varchar','250',''),(3979,858,'学校id','s_id',1,1,1,0,'',1,0,'center','','','','',3968,'','','','varchar','250',''),(3980,858,'添加时间','addtime',12,1,0,0,'',1,0,'center','','','','',3969,'','','','int','11',''),(3981,811,'首页推荐','is_recommend',23,1,0,0,'开启|1,关闭|0',1,1,'center','','','','',3981,'','','','tinyint','4',''),(3982,811,'起步费','starting_fee',13,1,0,0,'',1,1,'center','','','','',3982,'','','','decimal','10',''),(3983,818,'首页推荐','is_recommend',23,1,0,0,'开启|1,关闭|0',1,1,'center','','','','',3983,'','','','tinyint','4',''),(3984,770,'公众号骑手订阅消息模板ID','mp_template_new',1,0,0,0,'',1,1,'center','','','','',3984,'','公众号配置','','varchar','250',''),(3985,770,'公众号用户抢单提醒','mp_template_grab',1,0,0,0,'',1,1,'center','','','','',3985,'','公众号配置','','varchar','250',''),(3986,770,'公众号取消订单消息提醒','mp_template_cancel',1,0,0,0,'',1,1,'center','','','','',3986,'','公众号配置','','varchar','250',''),(3987,770,'公众号商家订阅消息','mp_template_store',1,0,0,0,'',1,1,'center','','','','',3987,'','公众号配置','','varchar','250',''),(3988,770,'公众号二手市场支付订阅消息	','mp_template_pay',1,0,0,0,'',1,1,'center','','','','',3988,'','公众号配置','','varchar','250',''),(3989,809,'排序','sort',20,1,0,0,'',1,1,'center','','','','',3989,'','','','int','11',''),(3990,812,'排序','sort',20,1,0,0,'',1,1,'center','','','','',3990,'','','','int','11',''),(3991,813,'排序','sort',20,1,0,0,'',1,1,'center','','','','',3991,'','','','int','11',''),(3992,811,'经度','longitude',1,0,0,0,'',1,1,'center','','','','',3992,'','','','varchar','250',''),(3993,811,'纬度','latitude',1,0,0,0,'',1,1,'center','','','','',3993,'','','','varchar','250',''),(3994,757,'学校名称','s_name',1,1,1,0,'',1,1,'center','','','','',1,'','','','varchar','250',''),(3996,818,'跳转链接','url',1,1,0,0,'',1,1,'center','','','','',3996,'','','','varchar','250',''),(3997,818,'是否是分类','is_cate',23,1,0,0,'开启|1,关闭|0',1,1,'center','','','','',3997,'','','','tinyint','4',''),(3999,770,'公众号二维码','mp_code',8,0,0,0,'',1,1,'center','','','','',3999,'','公众号配置','','varchar','250','');
/*!40000 ALTER TABLE `gc_field` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_file`
--

DROP TABLE IF EXISTS `gc_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filepath` varchar(255) DEFAULT NULL COMMENT '图片路径',
  `hash` varchar(32) DEFAULT NULL COMMENT '文件hash值',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=99 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_file`
--

LOCK TABLES `gc_file` WRITE;
/*!40000 ALTER TABLE `gc_file` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_log`
--

DROP TABLE IF EXISTS `gc_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `application_name` varchar(50) DEFAULT NULL COMMENT '应用名称',
  `username` varchar(250) DEFAULT NULL COMMENT '操作用户',
  `url` varchar(250) DEFAULT NULL COMMENT '请求url',
  `ip` varchar(250) DEFAULT NULL COMMENT 'ip',
  `useragent` varchar(250) DEFAULT NULL COMMENT 'useragent',
  `content` text COMMENT '请求内容',
  `errmsg` varchar(250) DEFAULT NULL COMMENT '异常信息',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `type` smallint(6) DEFAULT NULL COMMENT '类型',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_log`
--

LOCK TABLES `gc_log` WRITE;
/*!40000 ALTER TABLE `gc_log` DISABLE KEYS */;
INSERT INTO `gc_log` VALUES (1,'accounts','admin','http://b28.t361.cn/accounts/WxUpload/xcxUpload','112.32.86.54','Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36','{\"id\":\"8\"}',NULL,1668155332,2),(2,'accounts','admin','http://b28.t361.cn/accounts/Version/test','112.32.86.54','Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36','[]',NULL,1668156751,2),(3,'accounts','admin','http://b30.t361.cn/accounts/Login/index.html','112.32.86.54','Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',NULL,NULL,1668157179,1),(4,'accounts','admin','http://b30.t361.cn/accounts/Login/index.html','112.32.84.75','Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',NULL,NULL,1668393519,1),(5,'accounts','admin','https://dianda.lailiqi.ltd/accounts/Login/index.html','120.219.144.123','Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',NULL,NULL,1668424813,1),(6,'accounts','admin','https://dianda.lailiqi.ltd/accounts/Login/index.html','120.219.144.123','Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',NULL,NULL,1668441464,1),(7,'accounts','admin','https://dianda.lailiqi.ltd/accounts/Login/index.html','120.219.144.206','Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',NULL,NULL,1669090147,1),(8,'accounts','admin','https://dianda.lailiqi.ltd/accounts/Login/index.html','119.39.51.230','Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 Core/1.94.186.400 QQBrowser/11.3.5195.400',NULL,NULL,1669090184,1),(9,'accounts','admin','https://dianda.lailiqi.ltd/accounts/Login/index.html','120.219.144.206','Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',NULL,NULL,1669166181,1),(10,'accounts','admin','https://dianda.lailiqi.ltd/accounts/Login/index.html','122.194.99.34','Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 SE 2.X MetaSr 1.0',NULL,NULL,1669166641,1),(11,'accounts','admin','https://dianda.lailiqi.ltd/accounts/Login/index.html','120.219.144.2','Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',NULL,NULL,1669689952,1),(12,'accounts','admin','https://dianda.lailiqi.ltd/accounts/Login/index.html','112.1.136.78','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',NULL,NULL,1669690025,1),(13,'accounts','admin','https://dianda.lailiqi.ltd/accounts/UploadOss/updateExt','112.1.136.78','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36','{\"u_id\":\"3\",\"oss_status\":\"1\"}',NULL,1669690566,2);
/*!40000 ALTER TABLE `gc_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_menu`
--

DROP TABLE IF EXISTS `gc_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_menu` (
  `menu_id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` mediumint(9) DEFAULT '0' COMMENT '父级id',
  `controller_name` varchar(32) DEFAULT NULL COMMENT '模块名称',
  `title` varchar(64) DEFAULT NULL COMMENT '模块标题',
  `pk_id` varchar(36) DEFAULT NULL COMMENT '主键名',
  `table_name` varchar(32) DEFAULT NULL COMMENT '模块数据库表',
  `is_create` tinyint(4) DEFAULT NULL COMMENT '是否允许生成模块',
  `status` tinyint(4) DEFAULT NULL COMMENT '0隐藏 10显示',
  `sortid` mediumint(9) DEFAULT '0' COMMENT '排序号',
  `table_status` tinyint(4) DEFAULT NULL COMMENT '是否生成数据库表',
  `is_url` tinyint(4) DEFAULT NULL COMMENT '是否只是url链接',
  `url` varchar(64) DEFAULT NULL,
  `menu_icon` varchar(32) DEFAULT NULL COMMENT 'icon字体图标',
  `tab_menu` varchar(250) DEFAULT NULL COMMENT 'tab选项卡菜单配置',
  `app_id` int(11) DEFAULT NULL COMMENT '所属模块',
  `is_submit` tinyint(4) DEFAULT NULL COMMENT '是否允许投稿',
  `upload_config_id` smallint(6) DEFAULT NULL COMMENT '上传配置id',
  `connect` varchar(20) DEFAULT NULL COMMENT '数据库连接',
  PRIMARY KEY (`menu_id`),
  KEY `controller_name` (`controller_name`) USING BTREE,
  KEY `module_id` (`app_id`)
) ENGINE=MyISAM AUTO_INCREMENT=872 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_menu`
--

LOCK TABLES `gc_menu` WRITE;
/*!40000 ALTER TABLE `gc_menu` DISABLE KEYS */;
INSERT INTO `gc_menu` VALUES (12,0,'System','系统管理','','',0,1,797,0,0,'','fa fa-gears','',1,0,0,NULL),(17,0,'','后台首页','','',0,1,1,0,1,'admin/Index/main','fa fa-home','',1,0,0,''),(18,12,'User','管理员管理','user_id','user',1,0,4,1,0,'','fa fa-user-secret','',1,0,0,''),(19,12,'Role','角色管理','role_id','role',1,0,5,1,0,'','fa fa-user','',1,0,0,NULL),(21,12,'','菜单管理','','',0,0,3,0,1,'admin/Sys.Menu/index','','',1,0,0,NULL),(41,12,'Config','系统配置','','',1,1,673,0,0,'admin/Base/config','glyphicon glyphicon-cog','基本设置|上传配置',1,0,0,NULL),(80,12,'Application','应用管理','','',0,0,2,0,0,'admin/Sys.Application/index','','',1,0,0,NULL),(670,12,'Log','日志管理','id','log',1,0,525,1,NULL,'','','',1,0,0,NULL),(673,12,'UploadConfig','上传配置','id','upload_config',1,0,722,0,NULL,'','','',1,0,0,NULL),(722,0,'','修改密码','','',0,0,692,0,NULL,'admin/Base/password','','',1,0,0,''),(782,0,'School','学校管理','s_id','school',1,1,757,0,NULL,'','fa fa-building-o','',209,0,0,''),(771,0,'','提现管理','','',1,1,771,0,NULL,'','fa fa-jpy','',210,0,0,''),(762,0,'Slide','轮播图管理','id','slide',1,1,762,1,NULL,'','fa fa-tv','',211,0,0,''),(823,0,'Order','订单','id','dmh_school_order',1,1,799,0,NULL,'','','',209,0,0,''),(772,771,'UserWithdraw','用户提现','id','user_withdraw',1,1,772,1,NULL,'','fa fa-jpy','',210,0,0,''),(729,730,'Tickets','票务预约','t_id','tickets',1,1,729,1,NULL,'','','',1,0,0,''),(733,730,'Dates','日期管理','d_id','dates',1,1,733,1,NULL,'','','',1,0,0,''),(759,0,NULL,'系统管理',NULL,NULL,0,1,759,0,0,NULL,'fa fa-gears',NULL,211,NULL,NULL,NULL),(752,0,'Account','账号管理','wxapp_id','account',1,1,752,1,NULL,'','','',1,0,0,''),(764,0,'Coupon','优惠券管理','o_id','coupon',1,1,764,1,NULL,'','fa fa-money','',210,0,0,''),(760,759,NULL,'后台首页',NULL,NULL,0,1,1,0,1,'subschool/Index/main','fa fa-gears',NULL,211,NULL,NULL,NULL),(754,0,NULL,'系统管理',NULL,NULL,0,0,754,0,0,NULL,'fa fa-gears',NULL,210,NULL,NULL,NULL),(747,0,'Reserve','预约管理','id','reserve',1,1,745,0,NULL,'','','',209,0,0,''),(787,0,'UserCoupon','用户优惠券','id','user_coupon',1,NULL,787,1,NULL,NULL,NULL,NULL,209,NULL,NULL,''),(757,0,'School','学校管理','s_id','school',1,1,757,1,NULL,'','fa fa-building-o','',210,0,0,''),(755,754,NULL,'后台首页',NULL,NULL,0,1,1,0,1,'accounts/Index/main','fa fa-gears',NULL,210,NULL,NULL,NULL),(756,754,NULL,'修改密码',NULL,NULL,0,1,2,0,1,'accounts/Base/password','fa fa-gears',NULL,210,NULL,NULL,NULL),(758,0,'SchoolAccount','账号管理','a_id','school_account',1,1,758,1,NULL,'','fa fa-group','',210,0,0,''),(761,759,NULL,'修改密码',NULL,NULL,0,1,2,0,1,'subschool/Base/password','fa fa-gears',NULL,211,NULL,NULL,NULL),(769,0,'Config','系统配置1','','system',1,0,525,0,0,'accounts/Base/config','glyphicon glyphicon-cog','基本设置|上传配置',210,0,0,''),(770,774,'Setting','小程序设置','id','setting',1,1,770,1,NULL,'','fa fa-cog','小程序设置|财务设置|订阅消息配置|图文设置|开关设置|其他设置|万能任务设置|公众号配置',210,0,0,''),(774,0,'','系统配置','','',0,1,774,0,NULL,'','fa fa-cog','',210,0,0,''),(775,774,'UploadOss','远程附件','u_id','upload_oss',1,1,775,1,NULL,'','fa fa-file-image-o','类型选择|阿里云配置|七牛云配置',210,0,0,''),(776,777,'WechatUser','用户列表','u_id','wechat_user',1,1,1,1,NULL,'','fa fa-user','',210,0,0,''),(777,0,'','用户管理','','',1,1,1,1,NULL,'','fa fa-user','',210,0,0,''),(832,777,'UserAuth','骑手认证','u_id','wechat_user',1,0,1,0,NULL,'','fa fa-user','',210,0,0,''),(779,774,'Sms','短信配置','id','sms',1,0,779,1,NULL,'','fa fa-commenting-o','基本配置|阿里云配置|创蓝配置',210,0,0,''),(822,0,'WechatUser','用户列表','u_id','wechat_user',1,1,1,0,NULL,'','fa fa-user','',209,0,0,''),(785,0,'Address','用户地址','a_id','address',1,NULL,785,1,NULL,NULL,NULL,NULL,209,NULL,NULL,''),(788,0,'','二手市场','','',0,1,789,0,NULL,'','','',211,0,0,''),(789,0,'Dmhexpress','快递站点管理','id','dmh_express',1,1,1000,1,NULL,'','','',211,0,0,''),(790,0,'UserWithdraw','用户提现','id','user_withdraw',1,1,772,0,NULL,'','','',209,0,0,''),(792,788,'Dmhmarketcategory','分类','id','dmh_market_category',1,1,792,1,NULL,'','','',211,0,0,''),(793,788,'Dmhmarketgoods','商品列表','m_id','dmh_market_goods',1,1,793,1,NULL,'','','',211,0,0,''),(796,788,'Dmhmarketcategorystay','商品评论','id','dmh_market_category_stay',1,1,796,1,NULL,'','','',211,0,0,''),(795,788,'Dmhmarketorder','订单管理','id','dmh_market_order',1,1,795,1,NULL,'','','',211,0,0,''),(829,830,'WechatUser','用户列表','u_id','wechat_user',1,1,1,0,NULL,'','fa fa-user','',211,0,0,''),(798,0,'Dmhmodular','首页模块','id','dmh_modular',1,1,799,1,NULL,'','','',211,0,0,''),(799,0,'Dmhschoolorder','分校订单管理','id','dmh_school_order',1,1,799,1,NULL,'','','',211,0,0,''),(800,0,'Setting','小程序设置','id','setting',1,1,770,0,NULL,'','fa fa-cog','小程序设置|财务设置|订阅消息配置|图文设置|开关设置|其他设置',209,0,0,''),(801,810,'Dmhmarketcategory','分类','id','dmh_market_category',1,1,792,0,NULL,'','','',209,0,0,''),(830,0,'','用户管理','','',0,1,1,0,NULL,'','fa fa-user','',211,0,0,''),(803,810,'Dmhmarketorder','订单管理','id','dmh_market_order',1,1,795,0,NULL,'','','',209,0,0,''),(804,810,'Dmhmarketcategorystay','商品评论','id','dmh_market_category_stay',1,1,796,0,NULL,'','','',209,0,0,''),(805,0,'Dmhauthentication','跑腿认证','id','dmh_authentication',1,1,798,0,NULL,'','','',209,0,0,''),(806,0,'Dmhmodular','首页模块','id','dmh_modular',1,1,798,0,NULL,'','','',209,0,0,''),(807,0,'Dmhexpress','快递站点管理','id','dmh_express',1,1,1000,0,NULL,'','','',209,0,0,''),(808,0,'','商家管理','','',1,1,808,0,NULL,'','','',211,0,0,''),(809,808,'ZhBusinesType','商家分类','type_id','zh_business_type',1,1,809,1,NULL,'','','',211,0,0,''),(810,0,'','二手市场','','',0,NULL,810,0,NULL,NULL,NULL,NULL,209,NULL,NULL,''),(811,808,'ZhBusiness','商家管理','business_id','zh_business',1,1,811,1,NULL,'','','',211,0,0,''),(812,808,'ZhGoodsType','商品分类','goods_type_id','zh_goods_type',1,1,812,1,NULL,'','','',211,0,0,''),(813,808,'ZhGoods','商品管理','id','zh_goods',1,1,813,1,NULL,'','','',211,0,0,''),(814,0,'','失物招领','','',1,1,814,0,NULL,'','','',211,0,0,''),(815,814,'ZhInfo','信息列表','info_id','zh_info',1,1,815,1,NULL,'','','',211,0,0,''),(816,814,'ZhCommentList','评论列表','id','zh_comment_list',1,1,816,1,NULL,'','','',211,0,0,''),(817,0,'','圈子管理','','',1,1,817,0,NULL,'','','',211,0,0,''),(818,817,'ZhForumClass','圈子分类','class_id','zh_forum_class',1,1,818,1,NULL,'','','',211,0,0,''),(819,817,'ZhArticles','文章管理','article_id','zh_articles',1,1,819,1,NULL,'','','',211,0,0,''),(820,817,'ZhCommenes','评论管理','id','zh_commenes',1,1,820,1,NULL,'','','',211,0,0,''),(821,0,'Slide','轮播图管理','id','slide',1,1,762,0,NULL,'','fa fa-tv','',209,0,0,''),(828,810,'Dmhmarketgoods','商品列表','m_id','dmh_market_goods',1,1,793,0,NULL,'','','',209,0,0,'mysql'),(831,830,'UserAuth','跑腿认证','u_id','wechat_user',1,1,1,0,NULL,'','fa fa-check-circle-o','',211,0,0,''),(833,0,'Order','订单管理','id','dmh_school_order',1,1,770,0,NULL,'','','',210,0,0,''),(834,810,'Dmhgoodsstay','收藏表','id','dmh_goods_stay',1,NULL,834,1,NULL,NULL,NULL,NULL,209,NULL,NULL,'mysql'),(835,788,'Dmhfootprint','我的足迹','id','dmh_footprint',1,0,835,1,NULL,'','','',211,0,0,''),(836,810,'Dmhfootprint','我的足迹','id','dmh_footprint',1,1,835,0,NULL,'','','',209,0,0,''),(838,0,'ZhInfo','失物招领信息列表','info_id','zh_info',1,1,815,0,NULL,'','','',209,0,0,''),(840,0,'ZhCommentList','失物招领评论列表','id','zh_comment_list',1,1,816,0,NULL,'','','',209,0,0,''),(841,0,'ZhForumClass','校园圈子分类管理','class_id','zh_forum_class',1,1,818,0,NULL,'','','',209,0,0,''),(844,0,'ZhCommenes','校园圈子评论管理','id','zh_commenes',1,1,820,0,NULL,'','','',209,0,0,''),(843,0,'ZhArticles','校园圈子文章管理','article_id','zh_articles',1,1,819,0,NULL,'','','',209,0,0,''),(845,0,'ZhRankingList','本校骑手佣金排行榜','u_id','wechat_user',1,1,1,0,NULL,'','fa fa-user','',209,0,0,''),(846,0,'ZhOrder','最新或历史订单','id','dmh_school_order',1,1,799,0,NULL,'','','',209,0,0,''),(847,0,'ZhGiveThumbsUp','点赞或取消点赞','id','zh_give_thumbs_up',1,NULL,847,1,NULL,NULL,NULL,NULL,209,NULL,NULL,'mysql'),(848,0,'ZhBusiness','商家管理','business_id','zh_business',1,1,811,0,NULL,'','','',209,0,0,''),(849,0,'ZhGoodsType','商品分类','goods_type_id','zh_goods_type',1,1,812,0,NULL,'','','',209,0,0,''),(850,0,'ZhGoods','商品管理','id','zh_goods',1,1,813,0,NULL,'','','',209,0,0,''),(851,0,'ZhBusinesType','商家分类','type_id','zh_business_type',1,1,809,0,NULL,'','','',209,0,0,''),(852,759,'Dmhschool','学校管理','','',0,1,852,0,NULL,'','','',211,0,0,''),(853,771,'Dmhschoolcarry','学校提现','id','dmh_school_carry',1,1,853,1,NULL,'','','',210,0,0,''),(854,0,'Dmhschoolcarry','学校提现','id','dmh_school_carry',1,1,853,0,NULL,'','','',211,0,0,''),(855,0,'AccountLog','余额记录','id','user_account_log',1,NULL,855,0,NULL,NULL,NULL,NULL,209,NULL,NULL,''),(858,0,'TopSetting','置顶金额配置','id','top_setting',1,1,857,0,NULL,'','','',209,0,0,''),(857,817,'TopSetting','置顶金额配置','id','top_setting',1,1,857,1,NULL,'','','',211,0,0,''),(863,808,'StoreRecharge','金豆配置',NULL,NULL,NULL,1,880,NULL,NULL,NULL,NULL,NULL,211,NULL,NULL,NULL),(864,808,'Dmhsettled','商家申请',NULL,NULL,NULL,1,866,NULL,NULL,NULL,NULL,NULL,211,NULL,NULL,NULL),(865,830,'Dmhstudent','实名认证',NULL,NULL,NULL,1,869,NULL,NULL,NULL,NULL,NULL,211,NULL,NULL,NULL),(866,0,'Dmharticle','文章管理',NULL,NULL,NULL,1,871,NULL,NULL,NULL,NULL,NULL,211,NULL,NULL,NULL),(867,0,'ExpressSpecs','快递规格',NULL,NULL,NULL,1,873,NULL,NULL,NULL,NULL,NULL,211,NULL,NULL,NULL),(868,817,'Dmhtopic','话题管理',NULL,NULL,NULL,1,874,NULL,NULL,NULL,NULL,NULL,211,NULL,NULL,NULL),(869,774,'Template','模板选择',NULL,NULL,NULL,1,876,NULL,NULL,NULL,NULL,NULL,210,NULL,NULL,NULL),(870,774,'Plugins','插件管理',NULL,NULL,NULL,1,877,NULL,NULL,NULL,NULL,NULL,210,NULL,NULL,NULL),(871,0,'UserCoupon','优惠券领取记录',NULL,NULL,NULL,1,878,NULL,NULL,NULL,NULL,NULL,211,NULL,NULL,NULL);
/*!40000 ALTER TABLE `gc_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_notice`
--

DROP TABLE IF EXISTS `gc_notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_notice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `s_id` varchar(250) DEFAULT NULL COMMENT '学校id',
  `title` varchar(250) DEFAULT NULL COMMENT '标题',
  `content` text COMMENT '内容',
  `createtime` int(11) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_notice`
--

LOCK TABLES `gc_notice` WRITE;
/*!40000 ALTER TABLE `gc_notice` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_notice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_plugins`
--

DROP TABLE IF EXISTS `gc_plugins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_plugins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) DEFAULT NULL COMMENT '名称',
  `identification` varchar(250) DEFAULT NULL COMMENT '标识',
  `version` varchar(250) DEFAULT NULL COMMENT '版本号',
  `dead_date` int(11) DEFAULT NULL COMMENT '到期时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_plugins`
--

LOCK TABLES `gc_plugins` WRITE;
/*!40000 ALTER TABLE `gc_plugins` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_plugins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_role`
--

DROP TABLE IF EXISTS `gc_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_role` (
  `role_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `name` varchar(36) DEFAULT NULL COMMENT '分组名称',
  `status` tinyint(4) DEFAULT NULL COMMENT '状态 10正常 0禁用',
  `pid` smallint(6) DEFAULT NULL COMMENT '所属父类',
  `description` text COMMENT '描述',
  PRIMARY KEY (`role_id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_role`
--

LOCK TABLES `gc_role` WRITE;
/*!40000 ALTER TABLE `gc_role` DISABLE KEYS */;
INSERT INTO `gc_role` VALUES (1,'超级管理员',1,0,'超级管理员'),(22,'管理员',1,0,'');
/*!40000 ALTER TABLE `gc_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_school`
--

DROP TABLE IF EXISTS `gc_school`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_school` (
  `s_id` int(11) NOT NULL AUTO_INCREMENT,
  `s_name` varchar(250) DEFAULT NULL COMMENT '学校名称',
  `wxapp_id` varchar(250) DEFAULT NULL,
  `plat_rate` int(11) DEFAULT NULL COMMENT '平台抽成',
  `school_rate` int(11) DEFAULT NULL COMMENT '学校抽成',
  `second_rate` int(11) DEFAULT NULL COMMENT '二手市场抽成百分比',
  `edit_status` smallint(6) DEFAULT NULL COMMENT '是否允许分校修改跑腿抽佣',
  `robot_key` varchar(250) DEFAULT NULL COMMENT '机器人key',
  `step` text COMMENT '阶梯选择配置',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `coupon_list` varchar(250) DEFAULT NULL COMMENT '优惠券列表',
  `alipay_name` varchar(255) DEFAULT NULL COMMENT '支付宝姓名',
  `alipay_account` varchar(255) DEFAULT NULL COMMENT '支付宝账户',
  `reward` text COMMENT '打赏金额',
  `reward_rate` varchar(250) DEFAULT NULL COMMENT '赏金抽成',
  `store_rate` varchar(250) DEFAULT NULL COMMENT '平台商家抽成',
  `fx_store_rate` int(11) DEFAULT NULL COMMENT '分校商家抽成',
  `deduction_num` int(11) DEFAULT '0' COMMENT '每单扣除金豆数',
  `threshold` int(11) DEFAULT '0' COMMENT '商家预警阈值',
  `fx_second_rate` int(11) DEFAULT '0' COMMENT '二手市场分校抽成',
  `logo` varchar(250) DEFAULT NULL COMMENT '学校logo',
  `province` varchar(250) DEFAULT NULL COMMENT '所在地区',
  `city` varchar(250) DEFAULT NULL COMMENT '所在地区',
  `store_bean_switch` smallint(6) DEFAULT '1' COMMENT '商家金豆功能',
  `bean_rate` int(11) DEFAULT '0' COMMENT '金豆分校抽成',
  `status` tinyint(4) DEFAULT '1' COMMENT '状态',
  `is_distribution` tinyint(4) DEFAULT '0' COMMENT '是否开启分销',
  `level1` int(11) DEFAULT '0' COMMENT '一级分销比例',
  `level2` int(11) DEFAULT '0' COMMENT '二级分销比例',
  `project` varchar(250) DEFAULT NULL COMMENT '享受分佣项目',
  `charge_mode` smallint(6) DEFAULT '0' COMMENT '商家入驻是否收费',
  `charge_price` decimal(10,2) DEFAULT '0.00' COMMENT '商家入驻价格',
  `is_open_pay` int(11) DEFAULT '0' COMMENT '1为开启,0为关闭',
  `ordertime` text COMMENT '下单时间段',
  PRIMARY KEY (`s_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_school`
--

LOCK TABLES `gc_school` WRITE;
/*!40000 ALTER TABLE `gc_school` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_school` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_school_account`
--

DROP TABLE IF EXISTS `gc_school_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_school_account` (
  `a_id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(250) DEFAULT NULL COMMENT '账号',
  `s_id` smallint(6) DEFAULT NULL COMMENT '管理学校',
  `pwd` varchar(250) DEFAULT NULL COMMENT '密码',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  PRIMARY KEY (`a_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_school_account`
--

LOCK TABLES `gc_school_account` WRITE;
/*!40000 ALTER TABLE `gc_school_account` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_school_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_setting`
--

DROP TABLE IF EXISTS `gc_setting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_setting` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `appid` varchar(250) DEFAULT NULL COMMENT '小程序appid',
  `appsecret` varchar(250) DEFAULT NULL COMMENT '小程序密钥',
  `mch_id` varchar(250) DEFAULT NULL COMMENT '商户号',
  `mch_key` varchar(250) DEFAULT NULL COMMENT '商户号密钥',
  `template_new` varchar(250) DEFAULT NULL COMMENT '骑手订阅消息模板ID',
  `template_grab` varchar(250) DEFAULT NULL COMMENT '用户抢单提醒',
  `template_cancel` varchar(250) DEFAULT NULL COMMENT '取消订单消息提醒',
  `template_store` varchar(250) DEFAULT NULL COMMENT '商家订阅消息',
  `template_comment` varchar(250) DEFAULT NULL COMMENT '圈子留言订阅消息',
  `template_pay` varchar(250) DEFAULT NULL COMMENT '二手市场支付订阅消息',
  `user_month_fee` varchar(250) DEFAULT NULL COMMENT '用户会员包月价格',
  `user_year_fee` varchar(250) DEFAULT NULL COMMENT '用户会员包年价格',
  `store_week_fee` varchar(250) DEFAULT NULL COMMENT '商家周卡价格',
  `store_month_fee` varchar(250) DEFAULT NULL COMMENT '商家月卡价格',
  `xcx_logo` varchar(250) DEFAULT NULL COMMENT '小程序个人中心logo',
  `back_logo` varchar(250) DEFAULT NULL COMMENT '分后台登录背景图',
  `vip_content` text COMMENT '会员协议说明',
  `privacy_content` text COMMENT '跑腿认证隐私条款',
  `help_content` text COMMENT '帮助中心',
  `toast_content` text COMMENT '弹框内容',
  `user_vip_switch` smallint(6) DEFAULT NULL COMMENT '会员充值功能',
  `company_pay_switch` smallint(6) DEFAULT NULL COMMENT '企业付款到零钱',
  `take_all_switch` smallint(6) DEFAULT NULL COMMENT '骑手是否可跨校接单',
  `second_check_switch` smallint(6) DEFAULT NULL COMMENT '二手市场开启审核',
  `article_check_switch` smallint(6) DEFAULT NULL COMMENT '论坛文章开启审核',
  `index_quanzi_switch` smallint(6) DEFAULT NULL COMMENT '首页论坛是否显示',
  `index_toast_switch` smallint(6) DEFAULT NULL COMMENT '首页弹窗是否显示',
  `index_rank_switch` smallint(6) DEFAULT NULL COMMENT '首页排行榜是否显示',
  `index_module_switch` smallint(6) DEFAULT NULL COMMENT '首页模块是否显示',
  `index_history_switch` smallint(6) DEFAULT NULL COMMENT '首页历史订单是否显示',
  `is_anonymous_switch` smallint(6) DEFAULT NULL COMMENT '论坛匿名是否开启',
  `runner_auth_switch` smallint(6) DEFAULT NULL COMMENT '个人中心跑腿认证是否显示',
  `refund_cert` text COMMENT '退款证书（apiclient_cert.pem）',
  `refund_key` text COMMENT '退款证书（apiclient_key.pem）',
  `qu_tips` varchar(250) DEFAULT NULL COMMENT '取快递文本框提示语句',
  `ji_tips` varchar(250) DEFAULT NULL COMMENT '寄快递文本框提示语句',
  `shi_tips` varchar(250) DEFAULT NULL COMMENT '食堂超市文本框提示语句',
  `wan_tips` varchar(250) DEFAULT NULL COMMENT '万能任务文本框提示语句',
  `withdraw_tips` varchar(250) DEFAULT NULL COMMENT '提现提示语句配置',
  `home_adv_type` smallint(6) DEFAULT NULL COMMENT '首页广告位类型',
  `home_adv_id` varchar(250) DEFAULT NULL COMMENT '首页广告位id',
  `second_adv_type` smallint(6) DEFAULT NULL COMMENT '二手市场广告位类型',
  `second_adv_id` varchar(250) DEFAULT NULL COMMENT '二手市场广告位id',
  `step_price` varchar(250) DEFAULT NULL COMMENT '阶梯价格',
  `start_fee` varchar(250) DEFAULT NULL COMMENT '起步费',
  `withdraw_min` varchar(250) DEFAULT NULL COMMENT '提现最低金额',
  `is_address_show` smallint(6) DEFAULT NULL COMMENT '收货地址是否显示',
  `is_address_must` smallint(6) DEFAULT NULL COMMENT '收货地址是否必填',
  `is_attach_show` smallint(6) DEFAULT NULL COMMENT '附件是否显示',
  `is_attach_must` smallint(6) DEFAULT NULL COMMENT '附件是否必填',
  `is_servicetime_show` smallint(6) DEFAULT NULL COMMENT '服务时间是否显示',
  `is_servicenum_show` smallint(6) DEFAULT '1' COMMENT '服务人数是否显示',
  `mp_appid` varchar(250) DEFAULT NULL COMMENT '公众号appid',
  `mp_secret` varchar(250) DEFAULT NULL COMMENT '公众号appsecret',
  `is_open_reward` smallint(6) DEFAULT '1' COMMENT '打赏是否开启',
  `posting_instructions` tinytext COMMENT '发帖须知',
  `mp_template_new` varchar(250) DEFAULT NULL COMMENT '公众号骑手订阅消息模板ID',
  `mp_template_grab` varchar(250) DEFAULT NULL COMMENT '公众号用户抢单提醒',
  `mp_template_cancel` varchar(250) DEFAULT NULL COMMENT '公众号取消订单消息提醒',
  `mp_template_store` varchar(250) DEFAULT NULL COMMENT '公众号商家订阅消息',
  `mp_template_pay` varchar(250) DEFAULT NULL COMMENT '公众号二手市场支付订阅消息	',
  `mp_code` varchar(250) DEFAULT NULL COMMENT '公众号二维码',
  `mp_name` varchar(250) DEFAULT NULL COMMENT '公众号名称',
  `mp_logo` varchar(250) DEFAULT NULL COMMENT '公众号logo',
  `order_finish_time` varchar(250) DEFAULT NULL COMMENT '订单默认完成小时数',
  `is_open_pay` smallint(6) DEFAULT '1' COMMENT '骑手垫付是否开启',
  `index_articles_switch` smallint(6) DEFAULT NULL COMMENT '圈子是否显示',
  `xcx_login_bg` varchar(250) DEFAULT NULL COMMENT '小程序授权登录页背景图',
  `threshold` int(11) DEFAULT '0' COMMENT '商家预警阈值',
  `index_grab_show` smallint(6) DEFAULT NULL COMMENT '首页抢单按钮配置',
  `store_recharge_rule` text COMMENT '商家金豆充值说明',
  `index_store_show` smallint(6) DEFAULT '0' COMMENT '首页商家是否显示',
  `index_rank_show` smallint(6) DEFAULT '0' COMMENT '赏金榜是否显示',
  `app_up_key` text COMMENT '小程序代码上传密钥',
  `store_settle` tinyint(4) DEFAULT '0' COMMENT '商家入驻是否开启',
  `explains` text COMMENT '身份认证说明',
  `is_real` smallint(6) DEFAULT '0' COMMENT '是否开启实名认证',
  `is_article_auth` tinyint(4) DEFAULT '0' COMMENT '发布圈子实名认证',
  `dmgexplain` varchar(250) DEFAULT NULL COMMENT '实名认证说明',
  `dmhimage` varchar(250) DEFAULT NULL COMMENT '实名认证默认图',
  `studentdmh` varchar(250) DEFAULT NULL COMMENT '学号替换字',
  `pay_type` smallint(6) DEFAULT '0' COMMENT '支付方式',
  `merchant_no` varchar(250) DEFAULT NULL COMMENT '商户号',
  `p12_password` varchar(250) DEFAULT NULL COMMENT '证书密码',
  `private_key` text COMMENT '私钥',
  `public_key` text COMMENT '公钥',
  `pay_method` smallint(6) DEFAULT '0' COMMENT '微信付款方式',
  `serial_no` varchar(250) DEFAULT NULL COMMENT '商户证书序列号',
  `template_notice` varchar(250) DEFAULT NULL COMMENT '消息提醒',
  `schedule_template` varchar(250) DEFAULT NULL COMMENT '日程提醒订阅消息',
  `bg_poster` varchar(250) DEFAULT NULL COMMENT '海报背景图',
  `template_refuse` varchar(250) DEFAULT NULL COMMENT '商家拒单消息提醒',
  `template_cancel_rider` varchar(250) DEFAULT NULL COMMENT '订单取消通知骑手消息',
  `template_refuse_mp` varchar(250) DEFAULT NULL COMMENT '商家拒单消息提醒',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_setting`
--

LOCK TABLES `gc_setting` WRITE;
/*!40000 ALTER TABLE `gc_setting` DISABLE KEYS */;
INSERT INTO `gc_setting` VALUES (4,'6','wx1b30dea196e9cc51','3c3b68a4916a96d9b28f7126afd24c39','1632751937','lvhf0xfu5lou5pditclioip4hlls310j','rTRh0tudCgUIWUeDIar6wWxdogdSm5r1y6kE-iJh2ac','1OPpHAn3Lq5MBF414U_DyrZid0LbwKc7wP5AUbqqQ_0','JnBB19Ang8ay13tn1bR39deds4SlrQvRwDLvLMuByUI','','Tg8rdnSACmR9qDvC44b8FPk2mCPjJ0zTUNk7zr7Yp4k','mn7GUU3fRhgR_xJz_b3wuVj4hpvJ8cBqHVYt5M_NwN8','19','99','90','365','http://cdn.lansu.net.cn/accounts/202206/202206030559090258960.png',NULL,'','','','',0,0,0,1,1,NULL,0,NULL,NULL,NULL,0,1,'1','1','下单此处可忽略','请输入你要寄的东西','','请输入你需要我们帮你做什么？代拿麦当劳？代买早餐？代送文件？或者其他服务？','',1,'',1,'','','','',1,1,0,0,1,0,'','',0,NULL,'','','','','','','','','24',0,1,'',0,1,'',0,0,'-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEAn1XHz7iQWYjCCz7udcRm3gET+iy4XROvJYn4/6kQyV5aLBhu\nF4Z4uFfUr60U3AwVZ9XIRaYRDmvnUWGPDLW/+obc/l43cL5iqvip5qzTQFXWZnrH\nRb3l0O5hRvi8R2hXTXcasJYzEiaESiAWZSL7fn/PfNJKzquP0VIZseOqw5R7ZJsH\nYf++BMS1hKwpqR5Mey8BysoNKp6sralNPfJlS4yXqgQLZO0IDoIz/5+rTj6+CaNJ\nRwI7Pb1jEgCQELk+72KkMdJxiJPXk57OSiZdn09nXkh8VgR2GzXikdd1gahzC0qw\ndWwkWht55UauGw8YQJcVhGFuU8M27TgImyibMQIDAQABAoIBAQCBZkDnyZQxooc0\nat9udRq1oVqACmGP9bSAYBUATGV9pErHFPAT2vmffHUWVxJhws5/jXcgWUXw2GD8\nDqcGQ3SuGWjQi+OqhHPNNjWFSUYnMY71mzDKyvYhP/dwlAEUXQDJwLjEQLcpPm6h\nZH3LlSV6DoKLdJ2cSmh6Lpr/hU3hlySXC7iZ6k6oae8etQix3/u4+rksbDt+fMIq\nLinnLjgfUfI2bM+92X5wsBxu1FV3JxutyADaqqenaZyGs7dE2MuMdwnmMS7SN4h9\n3C4PKH/hh8S8dazxY5iyz4UAo7I0zjI+Ba94Uo6W+i7Ig/eLZPIo84P9DaZd9AJR\nrr/0O5oBAoGBAM9LkTHnTqULTIHy3odmKRfBPmgoZ7Oh0Q4Y8g6yfXmifYhxMWwb\ncGWy4kNwqyp/bbZW4Chqkc5pgarpTqyRTIg9k5toKrUVRZuSKAyAIDtLHtnzvNPl\noHh6gqt8aQKQ0zSaNIT1S6NoqSzTvr3WYHMzBKhXOcyoeLa/fYVTVNYZAoGBAMTF\nf8/VkJ5eIKAxPWEfPwUfke6F2GdCHcSQjvnLt0LxPDnuhlPRMigtTZvVQJf+bm79\nlf/LfdfUME+Ii2tnB1u+YP4amZccCx08MtyEE4eEwG7rq0fmZxj0lT2zia2oOK2M\naC40HxXPgSBN99W4jxqT39xW0c6iMtW6cNFg3CDZAoGAGkZ20f+CvXLQMMyLHlh5\nrvQkp+kvM9q39/R7ghdnxiothUTrwcs8lPd2rJu0Zn+edXVPlm/jqWlAMVy/Rypn\nrAE6G4G5oBhhKVX+U49OBpYABBpb/fPmQj8tHvV3DgczbkB5lbzN6JmUkAUK8V8h\n/Jgj5/6eae2U130wON0WLMkCgYAe8LMtOfaYgFJ+/d8Z43DkXFd0+wTRD7tgih6B\nNsAlPYtrzI7ApTdOy/jVFQ4oGDDDMQqiAxxRkKLcDqtlgvjMOz5DFmmqMhWpTirt\nM7NibsRXbKUtFBSH/wVsg0uVy8rFtzs2cKmmo085hij/KRsPYcskeV5aMHTv2HYe\n5i0W2QKBgGm56ijouE9n+Ph5FbXuYipW/VeiHlFexK2wISJjW0lMDEymA3fd6EVz\noNz6E/5n/+b8Lfugv2ZRbjfVnTeabWEYXw/u45IzPdzoc+cjxor8uRKro5SMQao5\nhLmPbsA8Eri2Rdh/My94W2rwTwYkdUkOCChxivYZwQ4qDCrWGWZq\n-----END RSA PRIVATE KEY-----',0,'',0,0,'后台审核','','编号',0,'1611908640','nh2qmyh2gw3tm0oa1pakf2pp2rbgjccv','-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDLhbWyG7xj1kNi\nf2eQ84UJ10maJtlzaLjId1wC9HaOcNfL5U3aY7aIbNaUW9odplU5UZkGC3rfkyLb\n4ovpuzaVH06/S9eZ9F0uY7sdoJ5J58OzkC/3fayrg1Z6YnPjsZkElcVFyuVAjryV\nuYINeS/5XufCsOE/jr9t2z14PQK9jsM4NWvNZRI1WthgPe79/Jhak6IVu4bo5k2a\noyFPxCSX4l8594/HJj7aWt8pKA49YLk0sdwAemg83T4VUpet7UPTrHODaDVb5Wvw\nTmIV0Rm5IHklr4moY07tDHpJaaWCTxQNqeuqG88ZJexWSh9ky5TEpqem2XV4mX/8\ni1AVtvmlAgMBAAECggEBAMNXsCCmvHh69Cx7KrWW9s+OQsfhl/9MuWc4ISl46L4p\nEwdSLRp7cHybMo4tZznkJ5KffieuJx6mg+PXGwGZPnd9GEFGE0dio3leIf/65VL8\nT/tuXovGpU/t/Lf0/VTDZqJe+nzVlJsVJW70Ih66fdB1Ri+5REmTwqs3rlVVAedb\ngu44bWzTwnvx6bga16y+LC+elgEtXdRatp1drh2QPB/6dTYUmRY0O97+kvRNz8oT\nmC/4TQY94OJ4+rShJLG1du7cjgGrkvFS7ECstYvfqqyHeyd+ZEUEP6Fxdk2WB3uV\njMy6m9LmVMmf0HwVOWxolHvuMZ1hKQUYWQxflsY86wECgYEA92X6rCTxWV6zjnCe\nTt0omOBENq+fa2e14gDzqTFH6rSRaSWLFEnCbWucc4+FeBuHVCN3vw/vx4RFiEEH\nn7xfLBcaWDe3W6MbJ25v8YyAELBIIfgWgwSFlc5NRN+DQaXAGxdtGQNEYq+4jeP4\nU6Ku58zcga0qxdHoQLCfjosFbUECgYEA0pkz3ClcYn/xC+FaSS32O6mGQL6kTUdn\nja8qFs1SFcWlNWMB602bBzOJAUQYA87/47pjemQp6upXhn/kB+O1hqw9qetfocNY\n/NQKouKT4xElkc6hvYFALh5nmI6OD0070lvsQ4lfKt9kCmTuYs4EG2Ho7xBV5xm+\nMUw4MIZYH2UCgYAvT7RJeWMiWSbzZXwQzuB1o+XHo3xUOOgiiVYPlBoRu2hXeFOJ\nlLV24W5w9xBqMLGHmKTMyApt2FDHxs/jb02wC9cA6d7Jyn5l4wvLYLgY+O1CecQs\nWBAH3wUN18StKDp9s9QsRWCtkrczg1Y5AFJ8h8PflLMqU4Mb4+sPgmyOQQKBgQC3\nKLMn2XkV2bwk3vuNBcJPpWKz0JpI878mRJ/QcQXhFaJXyiITKc2Y98NCLJzOQyve\nPW7jNVYXj3RL79K84dgwpoCC1ci4gZNVYH1XqMOCCpmoNBQLIuxUr/Ddh64ZtMxA\nad4T5te0C9GQELQbjp2XyxGxSX3MnmEBsw5zdYQS2QKBgFz4ggubWzrnSGYaNHjc\ntCC/wk8Ez1MlsV7SIF6ocLujUnwmbQT0R7YZ+fHKkzLFTJyWYDR1qHkRgV+FO1Mb\n0k8/0RRg9aml9qNyo00eWXs3M8pUoAJzpjbbtrGYjrEinlnAL2aQWsjCihI/SSzW\nWV+vhi8rr6Kt1kIq9Hyx0G6y\n-----END PRIVATE KEY-----','-----BEGIN CERTIFICATE-----\nMIID8DCCAtigAwIBAgIUZozmzzzCscAWiJnswb6LRfKviH4wDQYJKoZIhvcNAQEL\nBQAwXjELMAkGA1UEBhMCQ04xEzARBgNVBAoTClRlbnBheS5jb20xHTAbBgNVBAsT\nFFRlbnBheS5jb20gQ0EgQ2VudGVyMRswGQYDVQQDExJUZW5wYXkuY29tIFJvb3Qg\nQ0EwHhcNMjIwMzI5MDIxMzU5WhcNMjcwMzI4MDIxMzU5WjCBgTETMBEGA1UEAwwK\nMTYxMTkwODY0MDEbMBkGA1UECgwS5b6u5L+h5ZWG5oi357O757ufMS0wKwYDVQQL\nDCTmtbfljZfkvZDovr7nvZHnu5znp5HmioDmnInpmZDlhazlj7gxCzAJBgNVBAYM\nAkNOMREwDwYDVQQHDAhTaGVuWmhlbjCCASIwDQYJKoZIhvcNAQEBBQADggEPADCC\nAQoCggEBAMuFtbIbvGPWQ2J/Z5DzhQnXSZom2XNouMh3XAL0do5w18vlTdpjtohs\n1pRb2h2mVTlRmQYLet+TItvii+m7NpUfTr9L15n0XS5jux2gnknnw7OQL/d9rKuD\nVnpic+OxmQSVxUXK5UCOvJW5gg15L/le58Kw4T+Ov23bPXg9Ar2Owzg1a81lEjVa\n2GA97v38mFqTohW7hujmTZqjIU/EJJfiXzn3j8cmPtpa3ykoDj1guTSx3AB6aDzd\nPhVSl63tQ9Osc4NoNVvla/BOYhXRGbkgeSWviahjTu0MeklppYJPFA2p66obzxkl\n7FZKH2TLlMSmp6bZdXiZf/yLUBW2+aUCAwEAAaOBgTB/MAkGA1UdEwQCMAAwCwYD\nVR0PBAQDAgTwMGUGA1UdHwReMFwwWqBYoFaGVGh0dHA6Ly9ldmNhLml0cnVzLmNv\nbS5jbi9wdWJsaWMvaXRydXNjcmw/Q0E9MUJENDIyMEU1MERCQzA0QjA2QUQzOTc1\nNDk4NDZDMDFDM0U4RUJEMjANBgkqhkiG9w0BAQsFAAOCAQEADCIuS4AhnrwA7rEk\nkADM7YaLct8CAO5MoTPx42ih+1msRit2DzXSmYmg1d66ujxstLCZxU1t7WMYGDuM\nBrb9vQEM3fFtpKUfVtfWQiYwBIxE36O4CIeoWXimyjpqUmzxbbIHfRUfCMNNu+bA\ndabpwrdmdi+l8js+UxLjB2k8K723uP/yyLHh9qac4lF91TpPhtNzrwTLEKNBZCES\nZfvP1KJLbt77CePmIosYMOQaim/ZUmWGgtWtCy7a8+pxndPjukFGoJn1HTq9GA9s\nntu8XHODTPmZtP5X96fideA24TJTsa9+NmgWzngEUJ3ubUGlI9VR6/UqBfwAdYlp\nxr9MrA==\n-----END CERTIFICATE-----',0,NULL,'','',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `gc_setting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_slide`
--

DROP TABLE IF EXISTS `gc_slide`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_slide` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) DEFAULT NULL COMMENT '名称',
  `s_id` varchar(250) DEFAULT NULL COMMENT '所属学校',
  `img` varchar(250) DEFAULT NULL COMMENT '图片',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `show_type` smallint(6) DEFAULT NULL COMMENT '显示位置',
  `url_type` smallint(6) DEFAULT NULL COMMENT '跳转类型',
  `url` varchar(250) DEFAULT NULL COMMENT 'url地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_slide`
--

LOCK TABLES `gc_slide` WRITE;
/*!40000 ALTER TABLE `gc_slide` DISABLE KEYS */;
INSERT INTO `gc_slide` VALUES (14,'广告','14','https://cdn.lansu.net.cn/subschool/202207/202207231554390251086.png',1654209412,'6',2,1,''),(15,'广告','12','https://cdn.lansu.net.cn/subschool/202209/202209050856340245565.png',1654639836,'6',1,1,''),(16,'广告2','12','http://cdn.lansu.net.cn/subschool/202206/202206080610450267899.png',1654639848,'6',2,NULL,''),(18,'广告1','13','https://cdn.lansu.net.cn/subschool/202210/202210091210390285916.png',1654640763,'6',1,NULL,''),(20,'gg1','17','https://cdn.lansu.net.cn/subschool/202209/202209181013040243759.png',1663467191,'6',1,1,''),(22,'会员','14','https://cdn.lansu.net.cn/subschool/202211/202211050212170268456.jpg',1667325657,'6',1,1,''),(24,'代取必读','13','https://cdn.lansu.net.cn/subschool/202211/202211070028300295512.jpeg',1667420868,'6',1,1,'');
/*!40000 ALTER TABLE `gc_slide` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_sms`
--

DROP TABLE IF EXISTS `gc_sms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_sms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `sms_type` varchar(200) DEFAULT NULL COMMENT '平台类型',
  `ali_sms_accesskeyid` varchar(250) DEFAULT NULL COMMENT '阿里云AccessKeyId',
  `ali_sms_accesskeysecret` varchar(250) DEFAULT NULL COMMENT '阿里云AccessKeySecret',
  `ali_sms_signname` varchar(250) DEFAULT NULL COMMENT '阿里云签名名称',
  `ali_sms_tempcode` varchar(250) DEFAULT NULL COMMENT '阿里云模板CODE',
  `cl_account` varchar(250) DEFAULT NULL COMMENT '创蓝账号',
  `cl_pwd` varchar(250) DEFAULT NULL COMMENT '创蓝密码',
  `cl_sign` varchar(250) DEFAULT NULL COMMENT '创蓝签名名称',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `sms_status` tinyint(4) DEFAULT NULL COMMENT '是否使用短信通知',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_sms`
--

LOCK TABLES `gc_sms` WRITE;
/*!40000 ALTER TABLE `gc_sms` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_sms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_spread_account_log`
--

DROP TABLE IF EXISTS `gc_spread_account_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_spread_account_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `wxapp_id` int(11) NOT NULL,
  `s_id` int(11) NOT NULL,
  `u_id` int(11) NOT NULL COMMENT '用户id',
  `from_id` int(11) DEFAULT '0' COMMENT '下级id',
  `type` int(11) NOT NULL DEFAULT '0' COMMENT '类型：跑腿订单|1,二手市场|2,圈子打赏|3,圈子置顶|4',
  `o_id` int(11) DEFAULT '0' COMMENT '订单id',
  `price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `operate` int(11) NOT NULL DEFAULT '0' COMMENT '0为减，1为加',
  `remark` varchar(255) NOT NULL COMMENT '备注',
  `createtime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `price` (`price`),
  KEY `type` (`type`),
  KEY `operate` (`operate`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_spread_account_log`
--

LOCK TABLES `gc_spread_account_log` WRITE;
/*!40000 ALTER TABLE `gc_spread_account_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_spread_account_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_store_recharge`
--

DROP TABLE IF EXISTS `gc_store_recharge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_store_recharge` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `s_id` varchar(250) DEFAULT NULL COMMENT '学校id',
  `price` decimal(10,2) DEFAULT NULL COMMENT '金额',
  `number` int(11) DEFAULT NULL COMMENT '金豆数',
  `addtime` int(11) DEFAULT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_store_recharge`
--

LOCK TABLES `gc_store_recharge` WRITE;
/*!40000 ALTER TABLE `gc_store_recharge` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_store_recharge` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_subscribe_log`
--

DROP TABLE IF EXISTS `gc_subscribe_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_subscribe_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `openid` varchar(255) DEFAULT NULL,
  `temp_id` varchar(255) DEFAULT NULL,
  `msg` text,
  `addtime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_subscribe_log`
--

LOCK TABLES `gc_subscribe_log` WRITE;
/*!40000 ALTER TABLE `gc_subscribe_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_subscribe_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_system`
--

DROP TABLE IF EXISTS `gc_system`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_system` (
  `name` varchar(50) NOT NULL,
  `data` varchar(255) NOT NULL,
  KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_system`
--

LOCK TABLES `gc_system` WRITE;
/*!40000 ALTER TABLE `gc_system` DISABLE KEYS */;
INSERT INTO `gc_system` VALUES ('water_status','0'),('site_title','格创跑腿SAAS管理系统'),('keyword','小程序开发,APP开发'),('description','格创跑腿SAAS管理系统'),('site_logo','/uploads/admin/202101/5ff40b8d7fbd2.jpg'),('file_size','2'),('copyright','格创网络'),('file_type','gif,png,jpg,jpeg,doc,docx,xls,xlsx,csv,pdf,rar,zip,txt,mp4,flv'),('domain',''),('water_position','5'),('water_logo',''),('appid','wxca74ebbff7ea581c'),('appsecret','7f23b1a52a50946b09c41b47401711e2'),('school_site_title','分校管理'),('sub_site_title','小程序管理12'),('agreement','&lt;p&gt;111&lt;/p&gt;'),('explain','&lt;p&gt;222&lt;/p&gt;');
/*!40000 ALTER TABLE `gc_system` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_template`
--

DROP TABLE IF EXISTS `gc_template`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_template` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `type` smallint(6) DEFAULT NULL COMMENT '模板类型',
  `createtime` int(11) DEFAULT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_template`
--

LOCK TABLES `gc_template` WRITE;
/*!40000 ALTER TABLE `gc_template` DISABLE KEYS */;
INSERT INTO `gc_template` VALUES (1,'6',2,1659709572);
/*!40000 ALTER TABLE `gc_template` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_tickets`
--

DROP TABLE IF EXISTS `gc_tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_tickets` (
  `t_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `title` varchar(250) DEFAULT NULL COMMENT '名称',
  `img` varchar(250) DEFAULT NULL COMMENT '图片',
  `notice` text COMMENT '购票须知',
  PRIMARY KEY (`t_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_tickets`
--

LOCK TABLES `gc_tickets` WRITE;
/*!40000 ALTER TABLE `gc_tickets` DISABLE KEYS */;
INSERT INTO `gc_tickets` VALUES (3,'12','21','');
/*!40000 ALTER TABLE `gc_tickets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_top_setting`
--

DROP TABLE IF EXISTS `gc_top_setting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_top_setting` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `price` decimal(10,2) DEFAULT NULL COMMENT '金额',
  `day` int(11) DEFAULT NULL COMMENT '置顶天数',
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `s_id` varchar(250) DEFAULT NULL COMMENT '学校id',
  `addtime` int(11) DEFAULT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_top_setting`
--

LOCK TABLES `gc_top_setting` WRITE;
/*!40000 ALTER TABLE `gc_top_setting` DISABLE KEYS */;
INSERT INTO `gc_top_setting` VALUES (7,10.00,7,'6','14',1654326071),(8,30.00,365,'6','12',1666611550);
/*!40000 ALTER TABLE `gc_top_setting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_upload_config`
--

DROP TABLE IF EXISTS `gc_upload_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_upload_config` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(250) DEFAULT NULL COMMENT '配置名称',
  `upload_replace` tinyint(4) DEFAULT NULL COMMENT '覆盖同名文件',
  `thumb_status` tinyint(4) DEFAULT NULL COMMENT '缩图开关',
  `thumb_width` varchar(250) DEFAULT NULL COMMENT '缩放宽度',
  `thumb_height` varchar(250) DEFAULT NULL COMMENT '缩放高度',
  `thumb_type` smallint(6) DEFAULT NULL COMMENT '缩图方式',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_upload_config`
--

LOCK TABLES `gc_upload_config` WRITE;
/*!40000 ALTER TABLE `gc_upload_config` DISABLE KEYS */;
INSERT INTO `gc_upload_config` VALUES (1,'默认配置',0,1,'600','400',3);
/*!40000 ALTER TABLE `gc_upload_config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_upload_oss`
--

DROP TABLE IF EXISTS `gc_upload_oss`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_upload_oss` (
  `u_id` int(11) NOT NULL AUTO_INCREMENT,
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `oss_status` tinyint(4) DEFAULT NULL COMMENT '是否开启远程附件',
  `oss_default_type` varchar(200) DEFAULT NULL COMMENT '类型',
  `ali_oss_accesskeyid` varchar(250) DEFAULT NULL COMMENT 'Access Key ID',
  `ali_oss_accesskeysecret` varchar(250) DEFAULT NULL COMMENT 'Access Key Secret',
  `ali_oss_endpoint` varchar(250) DEFAULT NULL COMMENT 'url',
  `ali_oss_bucket` varchar(250) DEFAULT NULL COMMENT 'bucket',
  `qny_oss_accesskey` varchar(250) DEFAULT NULL COMMENT 'Accesskey',
  `qny_oss_secretkey` varchar(250) DEFAULT NULL COMMENT 'Secretkey',
  `qny_oss_bucket` varchar(250) DEFAULT NULL COMMENT 'bucket',
  `qny_oss_domain` varchar(250) DEFAULT NULL COMMENT 'url',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `tencent_oss_secretid` varchar(250) DEFAULT NULL COMMENT '腾讯云keyId',
  `tencent_oss_secretkey` varchar(250) DEFAULT NULL COMMENT '腾讯云keysecret',
  `tencent_oss_bucket` varchar(250) DEFAULT NULL COMMENT 'bucket（存储桶名称）',
  `tencent_oss_region` varchar(250) DEFAULT NULL COMMENT '所属区域',
  PRIMARY KEY (`u_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_upload_oss`
--

LOCK TABLES `gc_upload_oss` WRITE;
/*!40000 ALTER TABLE `gc_upload_oss` DISABLE KEYS */;
INSERT INTO `gc_upload_oss` VALUES (3,'6',1,'qiniuyun','','','','','LMMr1BAFNofwSoLaPut_zN9Udjc0RzDF8U7WSd6x','nNiPYxuxlBGkr39P4H9J2D0-ae_5VUicUIKgps7W','postom','https://cdn.lansu.net.cn/',0,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `gc_upload_oss` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_user`
--

DROP TABLE IF EXISTS `gc_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `name` varchar(250) DEFAULT NULL COMMENT '真实姓名',
  `user` varchar(250) DEFAULT NULL COMMENT '用户名',
  `pwd` varchar(250) DEFAULT NULL COMMENT '密码',
  `role_id` varchar(250) DEFAULT NULL COMMENT '所属分组',
  `note` varchar(250) DEFAULT NULL COMMENT '备注',
  `status` tinyint(4) DEFAULT NULL COMMENT '状态',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `avatar` varchar(250) DEFAULT NULL COMMENT '头像',
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_user`
--

LOCK TABLES `gc_user` WRITE;
/*!40000 ALTER TABLE `gc_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_user_account_log`
--

DROP TABLE IF EXISTS `gc_user_account_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_user_account_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `wxapp_id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `type` int(11) NOT NULL COMMENT '1为跑腿，2为二手市场',
  `price` decimal(10,2) NOT NULL,
  `operate` int(11) DEFAULT '0' COMMENT '0为增加，-1为减少',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户余额变动记录表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_user_account_log`
--

LOCK TABLES `gc_user_account_log` WRITE;
/*!40000 ALTER TABLE `gc_user_account_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_user_account_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_user_coupon`
--

DROP TABLE IF EXISTS `gc_user_coupon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_user_coupon` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `o_id` varchar(250) DEFAULT NULL COMMENT '优惠券id',
  `u_id` varchar(250) DEFAULT NULL COMMENT '用户id',
  `s_id` varchar(250) DEFAULT NULL COMMENT '学校id',
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `use_status` smallint(6) DEFAULT NULL COMMENT '使用状态（0为未使用，1为已使用）',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `update_time` varchar(250) DEFAULT NULL COMMENT '更新时间',
  `c_name` varchar(250) DEFAULT NULL COMMENT '优惠券名称',
  `price` decimal(10,2) DEFAULT NULL COMMENT '价格',
  `type` int(11) DEFAULT '0' COMMENT '0为立减,1为满减',
  `cut_num` decimal(10,2) DEFAULT '0.00' COMMENT '满减金额',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=173 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_user_coupon`
--

LOCK TABLES `gc_user_coupon` WRITE;
/*!40000 ALTER TABLE `gc_user_coupon` DISABLE KEYS */;
INSERT INTO `gc_user_coupon` VALUES (14,'7','21','12','6',0,1654670472,NULL,'满减券',3.00,1,1.00),(15,'7','16','12','6',0,1654671224,NULL,'满减券',3.00,1,1.00),(16,'7','43','13','6',0,1654671446,NULL,'满减券',3.00,1,1.00),(17,'7','41','13','6',0,1654672361,NULL,'满减券',3.00,1,1.00),(18,'7','67','13','6',0,1654683127,NULL,'满减券',3.00,1,1.00),(19,'7','71','13','6',0,1654683176,NULL,'满减券',3.00,1,1.00),(20,'7','78','13','6',0,1654685217,NULL,'满减券',3.00,1,1.00),(21,'7','20','12','6',0,1654719246,NULL,'满减券',3.00,1,1.00),(22,'7','22','12','6',0,1654729813,NULL,'满减券',3.00,1,1.00),(23,'7','97','13','6',0,1654745840,NULL,'满减券',3.00,1,1.00),(24,'7','103','13','6',0,1654756501,NULL,'满减券',3.00,1,1.00),(25,'7','39','13','6',0,1654762586,NULL,'满减券',3.00,1,1.00),(26,'7','111','13','6',1,1654769124,'1654847128','满减券',3.00,1,1.00),(27,'7','40','13','6',0,1654781505,NULL,'满减券',3.00,1,1.00),(28,'7','59','13','6',0,1654787178,NULL,'满减券',3.00,1,1.00),(29,'7','54','13','6',0,1654788850,NULL,'满减券',3.00,1,1.00),(30,'7','22','13','6',0,1654814443,NULL,'满减券',1.00,1,3.00),(31,'7','23','12','6',0,1654814547,NULL,'满减券',1.00,1,1.00),(32,'7','23','13','6',0,1654814562,NULL,'满减券',1.00,1,1.00),(33,'7','136','12','6',0,1654827364,NULL,'满减券',1.00,1,3.00),(34,'7','141','12','6',0,1654830104,NULL,'满减券',1.00,1,3.00),(35,'7','143','12','6',0,1654840510,NULL,'满减券',1.00,1,3.00),(36,'7','91','13','6',0,1654849830,NULL,'满减券',1.00,1,3.00),(37,'7','150','12','6',1,1654860103,'1654860131','满减券',1.00,1,3.00),(38,'7','98','13','6',0,1654925159,NULL,'满减券',1.00,1,3.00),(39,'7','167','13','6',0,1654935266,NULL,'满减券',1.00,1,3.00),(40,'7','170','13','6',0,1654938912,NULL,'满减券',1.00,1,3.00),(41,'7','16','13','6',0,1654953649,NULL,'满减券',1.00,1,3.00),(42,'7','223','12','6',0,1655112759,NULL,'满减券',1.00,1,3.00),(43,'7','225','13','6',0,1655121512,NULL,'满减券',1.00,1,3.00),(44,'7','226','12','6',0,1655122600,NULL,'满减券',1.00,1,3.00),(45,'7','30','13','6',0,1655170708,NULL,'满减券',1.00,1,3.00),(46,'7','268','12','6',1,1655372755,'1655372776','满减券',1.00,1,3.00),(47,'7','270','13','6',0,1655378436,NULL,'满减券',1.00,1,3.00),(48,'7','274','12','6',0,1655456770,NULL,'满减券',1.00,1,3.00),(49,'7','273','13','6',0,1655464242,NULL,'满减券',1.00,1,3.00),(50,'7','282','13','6',0,1655527348,NULL,'满减券',1.00,1,3.00),(51,'7','283','12','6',0,1655529764,NULL,'满减券',1.00,1,3.00),(52,'7','303','13','6',0,1655623792,NULL,'满减券',1.00,1,3.00),(53,'7','314','13','6',0,1655654602,NULL,'满减券',1.00,1,3.00),(54,'7','315','13','6',0,1655693556,NULL,'满减券',1.00,1,3.00),(55,'7','321','13','6',0,1655706039,NULL,'满减券',1.00,1,3.00),(56,'7','34','13','6',0,1655706966,NULL,'满减券',1.00,1,3.00),(57,'7','348','12','6',0,1655805681,NULL,'满减券',1.00,1,3.00),(58,'7','360','12','6',0,1655874935,NULL,'满减券',1.00,1,3.00),(59,'7','370','13','6',0,1655946805,NULL,'满减券',1.00,1,3.00),(60,'7','64','13','6',0,1655971629,NULL,'满减券',1.00,1,3.00),(61,'7','381','13','6',0,1655973041,NULL,'满减券',1.00,1,3.00),(62,'7','112','13','6',0,1655973590,NULL,'满减券',1.00,1,3.00),(63,'7','224','13','6',0,1655977518,NULL,'满减券',1.00,1,3.00),(64,'7','384','13','6',0,1655982528,NULL,'满减券',1.00,1,3.00),(65,'7','383','13','6',0,1655983277,NULL,'满减券',1.00,1,3.00),(66,'7','259','13','6',0,1655983874,NULL,'满减券',1.00,1,3.00),(67,'7','387','13','6',0,1655985166,NULL,'满减券',1.00,1,3.00),(68,'7','397','12','6',0,1656046835,NULL,'满减券',1.00,1,3.00),(69,'7','60','13','6',0,1656133855,NULL,'满减券',1.00,1,3.00),(70,'7','445','12','6',0,1656739497,NULL,'满减券',1.00,1,3.00),(71,'7','433','13','6',0,1657041325,NULL,'满减券',1.00,1,3.00),(72,'7','456','12','6',0,1657344141,NULL,'满减券',1.00,1,3.00),(73,'7','17','12','6',0,1657792738,NULL,'满减券',1.00,1,3.00),(74,'7','476','12','6',0,1659709215,NULL,'满减券',1.00,1,3.00),(75,'7','750','12','6',0,1661757148,NULL,'满减券',1.00,1,3.00),(76,'7','709','12','6',0,1661758159,NULL,'满减券',1.00,1,3.00),(77,'7','765','12','6',1,1661773020,'1661773035','满减券',1.00,1,3.00),(78,'7','805','13','6',0,1661854783,NULL,'满减券',1.00,1,3.00),(79,'7','827','12','6',0,1661877825,NULL,'满减券',1.00,1,3.00),(80,'7','833','12','6',0,1661917152,NULL,'满减券',1.00,1,3.00),(81,'7','841','12','6',0,1661918275,NULL,'满减券',1.00,1,3.00),(82,'7','858','12','6',1,1661930394,'1661930946','满减券',1.00,1,3.00),(83,'7','871','12','6',0,1661934987,NULL,'满减券',1.00,1,3.00),(84,'7','887','12','6',0,1661939792,NULL,'满减券',1.00,1,3.00),(85,'7','834','12','6',1,1661950457,'1663470105','满减券',1.00,1,3.00),(86,'7','909','12','6',0,1661950538,NULL,'满减券',1.00,1,3.00),(87,'7','917','12','6',1,1661992844,'1662000184','满减券',1.00,1,3.00),(88,'7','925','12','6',0,1662002206,'1662024415','满减券',1.00,1,3.00),(89,'7','905','12','6',0,1662003522,NULL,'满减券',1.00,1,3.00),(90,'7','939','12','6',0,1662015463,NULL,'满减券',1.00,1,3.00),(91,'7','971','12','6',0,1662096378,NULL,'满减券',1.00,1,3.00),(92,'7','983','12','6',0,1662104742,NULL,'满减券',1.00,1,3.00),(93,'7','964','12','6',0,1662105940,NULL,'满减券',1.00,1,3.00),(94,'7','997','12','6',0,1662110747,NULL,'满减券',1.00,1,3.00),(95,'7','1004','12','6',0,1662114074,NULL,'满减券',1.00,1,3.00),(96,'7','1012','12','6',0,1662120050,NULL,'满减券',1.00,1,3.00),(97,'7','822','12','6',0,1662120964,NULL,'满减券',1.00,1,3.00),(98,'7','1023','12','6',0,1662163225,NULL,'满减券',1.00,1,3.00),(99,'7','1033','12','6',0,1662172637,NULL,'满减券',1.00,1,3.00),(100,'7','1124','12','6',0,1662201599,NULL,'满减券',1.00,1,3.00),(101,'7','1164','12','6',0,1662259778,NULL,'满减券',1.00,1,3.00),(102,'7','1163','12','6',0,1662283091,NULL,'满减券',1.00,1,3.00),(103,'7','1216','12','6',0,1662287072,NULL,'满减券',1.00,1,3.00),(104,'7','838','12','6',0,1662304729,NULL,'满减券',1.00,1,3.00),(105,'7','1247','12','6',0,1662364663,NULL,'满减券',1.00,1,3.00),(106,'7','1254','12','6',0,1662365075,NULL,'满减券',1.00,1,3.00),(107,'7','1213','12','6',0,1662368845,NULL,'满减券',1.00,1,3.00),(108,'7','1313','13','6',0,1662447001,NULL,'满减券',1.00,1,3.00),(109,'7','1346','12','6',0,1662510235,NULL,'满减券',1.00,1,3.00),(110,'7','1389','12','6',0,1662563129,NULL,'满减券',1.00,1,3.00),(111,'7','1115','12','6',0,1662631633,NULL,'满减券',1.00,1,3.00),(112,'7','1421','12','6',0,1662694999,NULL,'满减券',1.00,1,3.00),(113,'7','1713','12','6',0,1663149919,NULL,'满减券',1.00,1,3.00),(114,'7','1859','12','6',0,1663393938,NULL,'满减券',1.00,1,3.00),(115,'7','1880','13','6',0,1663411999,NULL,'满减券',1.00,1,3.00),(116,'7','1884','12','6',0,1663416023,'1663495406','满减券',1.00,1,3.00),(117,'7','1615','12','6',0,1663423107,NULL,'满减券',1.00,1,3.00),(118,'7','1897','14','6',1,1663468939,'1663471748','满减券',1.00,1,3.00),(119,'7','1932','14','6',1,1663477713,'1663478121','满减券',1.00,1,3.00),(120,'7','1930','14','6',1,1663478534,'1663478557','满减券',1.00,1,3.00),(121,'7','1940','14','6',1,1663482137,'1663482674','满减券',1.00,1,3.00),(122,'7','1952','14','6',0,1663486895,'1663487357','满减券',1.00,1,3.00),(123,'7','1955','14','6',0,1663487052,NULL,'满减券',1.00,1,3.00),(124,'7','349','14','6',0,1663490869,NULL,'满减券',1.00,1,3.00),(125,'7','1964','14','6',1,1663491709,'1663491729','满减券',1.00,1,3.00),(126,'7','1968','12','6',0,1663494301,NULL,'满减券',1.00,1,3.00),(127,'7','1975','12','6',0,1663512269,NULL,'满减券',1.00,1,3.00),(128,'7','1977','14','6',0,1663516708,'1663827321','满减券',1.00,1,3.00),(129,'7','1979','14','6',1,1663548503,'1663548736','满减券',1.00,1,3.00),(130,'7','1705','14','6',0,1663556689,NULL,'满减券',1.00,1,3.00),(131,'7','1994','14','6',1,1663556710,'1663556731','满减券',1.00,1,3.00),(132,'7','2009','14','6',0,1663559959,NULL,'满减券',1.00,1,3.00),(133,'7','2014','14','6',0,1663561402,NULL,'满减券',1.00,1,3.00),(134,'7','1174','14','6',1,1663569927,'1663570510','满减券',1.00,1,3.00),(135,'7','739','14','6',0,1663574257,NULL,'满减券',1.00,1,3.00),(136,'7','1892','14','6',0,1663582366,'1663665756','满减券',1.00,1,3.00),(137,'7','2044','14','6',0,1663593549,'1663640784','满减券',1.00,1,3.00),(138,'7','2053','14','6',1,1663640527,'1663640540','满减券',1.00,1,3.00),(139,'7','2057','14','6',1,1663642404,'1663642442','满减券',1.00,1,3.00),(140,'7','2063','14','6',1,1663643554,'1663652163','满减券',1.00,1,3.00),(141,'7','2082','14','6',0,1663648995,NULL,'满减券',1.00,1,3.00),(142,'7','2084','14','6',0,1663649045,NULL,'满减券',1.00,1,3.00),(143,'7','2088','14','6',0,1663650525,NULL,'满减券',1.00,1,3.00),(144,'7','2090','14','6',1,1663651556,'1663651661','满减券',1.00,1,3.00),(145,'7','2092','14','6',1,1663651995,'1663652052','满减券',1.00,1,3.00),(146,'7','1724','14','6',1,1663652741,'1663652778','满减券',1.00,1,3.00),(147,'7','2091','14','6',0,1663658703,NULL,'满减券',1.00,1,3.00),(148,'7','2103','14','6',0,1663661059,NULL,'满减券',1.00,1,3.00),(149,'7','2102','14','6',0,1663661334,'1663663715','满减券',1.00,1,3.00),(150,'7','1988','14','6',1,1663663995,'1665117934','满减券',1.00,1,3.00),(151,'7','2001','14','6',0,1663664998,NULL,'满减券',1.00,1,3.00),(152,'7','1741','14','6',0,1663665513,'1663687015','满减券',1.00,1,3.00),(153,'7','2124','14','6',1,1663683934,'1663683969','满减券',1.00,1,3.00),(154,'7','2126','14','6',0,1663689852,'1663903670','满减券',1.00,1,3.00),(155,'7','1840','12','6',0,1663725426,NULL,'满减券',1.00,1,3.00),(156,'7','2130','14','6',1,1663726086,'1663732402','满减券',1.00,1,3.00),(157,'7','2171','14','6',0,1663743639,NULL,'满减券',1.00,1,3.00),(158,'7','2167','12','6',0,1663744127,NULL,'满减券',1.00,1,3.00),(159,'7','2149','14','6',1,1663747639,'1663747731','满减券',1.00,1,3.00),(160,'7','2052','14','6',0,1663748795,'1663752217','满减券',1.00,1,3.00),(161,'7','2187','12','6',0,1663751517,NULL,'满减券',1.00,1,3.00),(162,'7','2206','14','6',0,1663782058,'1663811105','满减券',1.00,1,3.00),(163,'7','2135','14','6',1,1663813483,'1663814556','满减券',1.00,1,3.00),(164,'7','2213','14','6',1,1663818033,'1663818065','满减券',1.00,1,3.00),(165,'7','2215','14','6',1,1663818606,'1663819039','满减券',1.00,1,3.00),(166,'7','1682','14','6',1,1663837802,'1663837836','满减券',1.00,1,3.00),(167,'7','1418','14','6',1,1663838226,'1663838265','满减券',1.00,1,3.00),(168,'7','981','14','6',0,1663840986,NULL,'满减券',1.00,1,3.00),(169,'7','2243','14','6',1,1663852350,'1663852442','满减券',1.00,1,3.00),(170,'7','2521','13','6',0,1665243134,NULL,'满减券',1.00,1,3.00),(171,'7','2553','13','6',0,1665278075,NULL,'满减券',1.00,1,3.00),(172,'7','2585','13','6',0,1665292734,NULL,'满减券',1.00,1,3.00);
/*!40000 ALTER TABLE `gc_user_coupon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_user_follow`
--

DROP TABLE IF EXISTS `gc_user_follow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_user_follow` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `wxapp_id` int(11) NOT NULL,
  `f_uid` int(11) NOT NULL COMMENT '被关注的用户id',
  `uid` int(11) NOT NULL COMMENT '操作关注的用户id',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '0为未关注，1为已关注',
  `addtime` varchar(255) DEFAULT NULL,
  `uptime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='用户关注列表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_user_follow`
--

LOCK TABLES `gc_user_follow` WRITE;
/*!40000 ALTER TABLE `gc_user_follow` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_user_follow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_user_vip_record`
--

DROP TABLE IF EXISTS `gc_user_vip_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_user_vip_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `wxapp_id` int(11) NOT NULL,
  `u_id` int(11) DEFAULT NULL,
  `order_id` varchar(100) NOT NULL,
  `openid` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL COMMENT '价格',
  `type` int(11) NOT NULL COMMENT '1：包月，2：包年',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `pay_time` varchar(255) DEFAULT NULL,
  `is_store` int(11) DEFAULT '0' COMMENT '1为商家会员，0为普通会员',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '0：未支付，1：已支付',
  `pay_type` int(11) DEFAULT '0' COMMENT '0为微信支付，1为翼支付',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='用户购买会员记录';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_user_vip_record`
--

LOCK TABLES `gc_user_vip_record` WRITE;
/*!40000 ALTER TABLE `gc_user_vip_record` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_user_vip_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_user_withdraw`
--

DROP TABLE IF EXISTS `gc_user_withdraw`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_user_withdraw` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `u_id` varchar(250) DEFAULT NULL COMMENT '用户id',
  `account` varchar(250) DEFAULT NULL COMMENT '提现账号',
  `price` decimal(10,2) DEFAULT NULL COMMENT '提现金额',
  `type` smallint(6) DEFAULT NULL COMMENT '提现类型',
  `status` smallint(6) DEFAULT NULL COMMENT '状态',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `update_time` int(11) DEFAULT NULL COMMENT '修改时间',
  `name` varchar(250) DEFAULT NULL COMMENT '提现姓名',
  `is_store` int(11) DEFAULT '0' COMMENT '是否是商家：0为否，1为是',
  `payment_no` varchar(255) DEFAULT NULL COMMENT '微信付款单号',
  `is_spread` int(11) DEFAULT '0' COMMENT '1为分销提现，0为否',
  `batch_id` varchar(255) DEFAULT NULL COMMENT '微信批次单号',
  `out_detail_no` varchar(255) DEFAULT NULL COMMENT '商家明细单号',
  `out_batch_no` varchar(255) DEFAULT NULL COMMENT '商家批次单号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_user_withdraw`
--

LOCK TABLES `gc_user_withdraw` WRITE;
/*!40000 ALTER TABLE `gc_user_withdraw` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_user_withdraw` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_wechat_user`
--

DROP TABLE IF EXISTS `gc_wechat_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_wechat_user` (
  `u_id` int(11) NOT NULL AUTO_INCREMENT,
  `wxapp_id` varchar(250) CHARACTER SET utf8 DEFAULT NULL COMMENT '平台id',
  `spid` int(11) DEFAULT '0' COMMENT '上级用户id',
  `nickname` varchar(250) DEFAULT NULL COMMENT '昵称',
  `avatar` varchar(250) CHARACTER SET utf8 DEFAULT NULL COMMENT '头像',
  `openid` varchar(250) CHARACTER SET utf8 DEFAULT NULL COMMENT 'openid',
  `mp_openid` varchar(255) DEFAULT NULL COMMENT '公众号openid',
  `unionid` varchar(255) DEFAULT NULL COMMENT '开放平台id',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `balance` decimal(10,2) DEFAULT '0.00' COMMENT '余额',
  `s_id` smallint(6) DEFAULT NULL COMMENT '所属学校',
  `run_status` smallint(6) DEFAULT NULL COMMENT '骑手审核状态',
  `auth_sid` smallint(6) DEFAULT NULL COMMENT '认证学校id',
  `deadtime` varchar(250) CHARACTER SET utf8 DEFAULT NULL COMMENT '到期时间',
  `t_sex` smallint(6) DEFAULT NULL COMMENT '性别',
  `t_name` varchar(250) CHARACTER SET utf8 DEFAULT NULL COMMENT '姓名',
  `phone` varchar(250) CHARACTER SET utf8 DEFAULT NULL COMMENT '手机号',
  `brokerage` decimal(10,2) DEFAULT '0.00' COMMENT '跑腿总佣金',
  `has_store` int(11) NOT NULL DEFAULT '0' COMMENT '是否商家 0否 1是',
  `store_id` int(11) DEFAULT NULL COMMENT '商家id',
  `store_balance` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '商家余额',
  `auth_time` int(11) DEFAULT NULL COMMENT '申请认证时间',
  `spread_balance` decimal(10,2) DEFAULT '0.00' COMMENT '分销余额',
  `spid_time` varchar(255) DEFAULT NULL COMMENT '绑定上级时间',
  `code` varchar(255) DEFAULT NULL COMMENT '分享二维码',
  `is_black` smallint(6) DEFAULT '0' COMMENT '是否被拉黑',
  `alipay_name` varchar(255) DEFAULT NULL COMMENT '支付宝姓名',
  `alipay_account` varchar(255) DEFAULT NULL COMMENT '支付宝账号',
  PRIMARY KEY (`u_id`),
  KEY `openid` (`openid`),
  KEY `spid` (`spid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_wechat_user`
--

LOCK TABLES `gc_wechat_user` WRITE;
/*!40000 ALTER TABLE `gc_wechat_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_wechat_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_week`
--

DROP TABLE IF EXISTS `gc_week`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_week` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_week`
--

LOCK TABLES `gc_week` WRITE;
/*!40000 ALTER TABLE `gc_week` DISABLE KEYS */;
INSERT INTO `gc_week` VALUES (8,'617869616f7975616e2e6c616e73752e6e65742e636e','2022-05-31 09:35:27'),(9,'616232382e743336312e636e','2022-11-11 07:27:22'),(10,'616233302e743336312e636e','2022-11-11 08:59:39'),(11,'616469616e64612e6c61696c6971692e6c7464','2022-11-14 11:20:13');
/*!40000 ALTER TABLE `gc_week` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_wx_upload`
--

DROP TABLE IF EXISTS `gc_wx_upload`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_wx_upload` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `number` varchar(250) DEFAULT NULL COMMENT '版本号',
  `version_desc` tinytext COMMENT '版本描述',
  `addtime` int(11) DEFAULT NULL COMMENT '添加时间',
  `is_online` smallint(6) DEFAULT '0' COMMENT '是否最新上传版本',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_wx_upload`
--

LOCK TABLES `gc_wx_upload` WRITE;
/*!40000 ALTER TABLE `gc_wx_upload` DISABLE KEYS */;
INSERT INTO `gc_wx_upload` VALUES (4,'6','1.1.4','优化若干问题',1656502435,0),(5,'6','1.1.5','优化若干问题',1657792538,0),(6,'6','1.1.6','优化若干问题',1659709004,0),(7,'6','1.1.7','优化若干问题',1662170813,0),(8,'6','1.1.8','优化若干问题',1663322217,1);
/*!40000 ALTER TABLE `gc_wx_upload` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_yilianyun_token`
--

DROP TABLE IF EXISTS `gc_yilianyun_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_yilianyun_token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(255) DEFAULT NULL COMMENT '易联云token(每日获取上限为20)',
  `addtime` int(11) DEFAULT NULL COMMENT '时间戳',
  `clientid` varchar(255) DEFAULT NULL COMMENT '所属应用ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_yilianyun_token`
--

LOCK TABLES `gc_yilianyun_token` WRITE;
/*!40000 ALTER TABLE `gc_yilianyun_token` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_yilianyun_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_zh_articles`
--

DROP TABLE IF EXISTS `gc_zh_articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_zh_articles` (
  `article_id` int(11) NOT NULL AUTO_INCREMENT,
  `s_id` int(11) DEFAULT NULL COMMENT '学校id',
  `wxapp_id` int(11) DEFAULT NULL COMMENT '平台id',
  `class_id` smallint(6) DEFAULT NULL COMMENT '所属分类',
  `u_id` varchar(250) DEFAULT NULL COMMENT '用户id',
  `is_top` int(11) DEFAULT '0' COMMENT '是否置顶',
  `is_expired` int(11) DEFAULT '0' COMMENT '0为过期或未置顶，1为置顶中',
  `content` text COMMENT '内容',
  `media_type` smallint(6) DEFAULT NULL COMMENT '媒体类型',
  `status` smallint(6) DEFAULT NULL COMMENT '状态',
  `createtime` int(11) DEFAULT NULL COMMENT '创建时间',
  `image` mediumtext COMMENT '图片',
  `video` varchar(250) DEFAULT NULL COMMENT '视频',
  `is_anonymous` varchar(250) DEFAULT NULL COMMENT '是否匿名',
  `comments_num` int(11) DEFAULT '0' COMMENT '评论数',
  `likes_num` int(11) DEFAULT '0' COMMENT '点赞数',
  `collections_num` int(11) DEFAULT '0' COMMENT '收藏数',
  `views_num` int(11) DEFAULT '0' COMMENT '点击量',
  `paytime` varchar(255) DEFAULT NULL COMMENT '置顶付款时间',
  `deadtime` int(11) DEFAULT NULL COMMENT '置顶到期时间',
  `returntype` int(11) DEFAULT '0' COMMENT '是否返回 0 默认  1已返回',
  `delete_time` int(11) DEFAULT NULL COMMENT '软删除标记',
  `topic` varchar(250) DEFAULT NULL COMMENT '话题',
  PRIMARY KEY (`article_id`)
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_zh_articles`
--

LOCK TABLES `gc_zh_articles` WRITE;
/*!40000 ALTER TABLE `gc_zh_articles` DISABLE KEYS */;
INSERT INTO `gc_zh_articles` VALUES (2,14,6,6,'20',1,0,'万般努力只为出人头地，低头哈腰只为爬得更好。',2,1,1654652795,'http://cdn.lansu.net.cn/api/202206/202206080945500207874.jpg','','1',1,3,0,165,NULL,1655257602,0,NULL,NULL),(3,12,6,16,'21',0,0,'今后换我来保护你',2,1,1654692461,'http://cdn.lansu.net.cn/api/202206/202206082046520219615.jpg','','1',1,7,0,200,NULL,NULL,0,NULL,NULL),(4,12,6,16,'16',0,0,'红色古城',2,1,1654728571,'http://cdn.lansu.net.cn/api/202206/202206090646440262311.jpg','','0',4,7,0,535,NULL,NULL,0,NULL,NULL),(5,13,6,20,'20',0,0,'书空隧道',2,1,1654778264,'http://cdn.lansu.net.cn/api/202206/202206092036580210521.jpg','','0',2,7,0,207,NULL,NULL,0,1665288255,NULL),(6,14,6,1,'293',0,0,'啊啊啊',0,1,1655537751,'','','1',0,0,0,5,NULL,NULL,0,NULL,NULL),(9,14,6,9,'457',0,0,'南门好吃好喝推荐',0,1,1658565634,'','','0',0,0,0,43,NULL,NULL,0,NULL,''),(10,14,6,4,'457',0,0,'新学期新起点 各位需要代取的可以进群哦 因为之前的群太多广告了 所以创立新1群先 所有宿舍楼都可进 开学阶段的福利放送以及代取通知都会发在群里面哦',2,1,1661477590,'https://cdn.lansu.net.cn/api/202208/202208260932500244976.jpg','','0',0,0,0,96,NULL,NULL,0,NULL,''),(11,14,6,1,'457',0,0,'各位催单直接扫码加这个微信哦，一直有人在线回复的，想要进粉丝群的也可以加这个微信哈',2,1,1661709035,'https://cdn.lansu.net.cn/api/202208/202208290149250287111.jpg','','0',0,0,0,48,NULL,NULL,0,NULL,'1'),(12,14,6,4,'457',0,0,'催单加这个微信 会有及时回复的 家人们不要找小驿校园通的客服了哈\n然后顺丰快递开学这几天建议大家自己去拿哦 如果太大 拿完加客服微信 然后把快递放在妈妈驿站门口写好姓名电话就好啦 ',2,1,1661710384,'https://cdn.lansu.net.cn/api/202208/202208290211450291683.jpg','','0',0,0,0,350,NULL,NULL,0,NULL,'1'),(13,12,6,30,'16',0,0,'快递代取开始接单啦，同学们还没有扫码进群的扫码进入快递代取福利群。福利不定期发放。',2,1,1661750660,'https://cdn.lansu.net.cn/api/202208/202208291323020266209.jpg','','0',8,0,0,305,NULL,NULL,0,NULL,'2'),(14,14,6,4,'457',0,0,'帮帮代取上楼介绍：\n目前我们能上楼的宿舍有：\n竹三、康二、桂六、桂五、桂四\n梅六、榕一、榕十三、榕十一\n榕7、8、9\n其他的都无法上楼哦，也就是说没有楼长，想要应聘的点击楼长招募应聘啦',0,1,1662055241,'','','0',8,1,0,467,NULL,NULL,0,NULL,''),(15,12,6,30,'16',0,0,'驿校通快递代取福利2群，加群不定期有福利哦。',2,1,1662198230,'https://cdn.lansu.net.cn/api/202209/202209031742450288917.jpg','','0',0,0,0,113,NULL,NULL,0,NULL,'2'),(16,14,6,4,'457',0,0,'今日份红包发完，抽完，想要进入拿免费代取的直接扫码，如果满200进不去了就找我拉哈',2,1,1662221479,'https://cdn.lansu.net.cn/api/202209/202209040010300235271.jpg,https://cdn.lansu.net.cn/api/202209/202209040010300232935.jpg,https://cdn.lansu.net.cn/api/202209/202209040010300235330.jpg,https://cdn.lansu.net.cn/api/202209/202209040010390242768.jpg','','0',2,0,0,247,NULL,NULL,0,NULL,'1'),(17,12,6,30,'16',0,0,'同学们想进1群的可以加我下面微信，我拉你进入哈???? 。',2,1,1662262669,'https://cdn.lansu.net.cn/api/202209/202209041136520210175.jpg','','0',0,2,0,345,NULL,NULL,0,NULL,'2'),(18,12,6,24,'985',0,0,'有谁喜欢玩兵击吗？HEMA运动，有的话可以和我联系',2,0,1662348130,'https://cdn.lansu.net.cn/api/202209/202209051121180255454.jpg','','0',0,0,0,6,NULL,NULL,0,1662348196,''),(21,14,6,1,'349',0,0,'开学到现在一节课没去过，什么水平',0,1,1662480891,'','','1',0,0,0,30,NULL,NULL,0,NULL,''),(22,14,6,1,'349',0,0,'问一下学校核酸什么时候结束',0,1,1662481310,'','','1',1,0,0,45,NULL,NULL,0,NULL,''),(23,14,6,31,'349',0,0,'妈妈驿站到底是在什么地方，去校内他们态度似乎有点差',0,1,1662481770,'','','0',0,0,0,0,NULL,NULL,0,1663004527,''),(24,14,6,31,'349',0,0,'有人知道新生啥时候军训嘛',0,1,1662482461,'','','1',1,0,0,140,NULL,NULL,0,NULL,''),(25,12,6,33,'16',0,0,'大学军训季，我感受到了召唤！好怀念，青春的样子。',2,1,1662516176,'https://cdn.lansu.net.cn/api/202209/202209070959570263310.jpg','','0',1,3,0,247,NULL,NULL,0,NULL,'11'),(26,14,6,31,'457',0,0,'欢迎新生入学，因为我们不单单是一个代取平台，更有快递代寄，二手发布，实物招领，论坛等一系列的功能，后续还会开通看广告送现金、代取等功能，所以小程序前端UI还在设计中，部分功能还在完事，各位敬请期待哦',0,1,1662985974,'','','0',0,0,0,85,NULL,NULL,0,NULL,''),(27,14,6,31,'349',0,0,'学校快递点指南\n拿快递的同学注意看短信\n圆通快递一部分在校内，一部分在校外，比较复杂\n短信上写着优尚的就是在校外，具体就是南门出门右转一直往前走，写着校内的就是菜鸟驿站了\n中通韵达邮政顺丰京东都在校内综合楼快递集散处\n极兔快递在南门牌坊，出校门过马路然后问个师兄师姐就能找到\n寄件在校内妈妈驿站，校内妈妈驿站只寄件不取件，所以取快递就不要去问啦',0,1,1663003906,'','','0',2,0,0,254,NULL,NULL,0,NULL,''),(28,14,6,1,'349',0,0,'想要发布论坛等都可以这样子发布哦，不要发布涉政、不健康、违法以及损害学校形象的内容就好啦，其他畅所欲言啦',2,1,1663004384,'https://cdn.lansu.net.cn/api/202209/202209130138460249441.jpg,https://cdn.lansu.net.cn/api/202209/202209130138460248337.jpg','','0',1,0,0,245,NULL,NULL,0,NULL,''),(29,14,6,31,'1544',0,0,'德邦的快递在哪拿嘞',0,1,1663060864,'','','0',2,0,0,141,NULL,NULL,0,NULL,''),(30,14,6,0,'2110',0,0,'晚上十点，雨后，我在南门京东快递前发现一箱贴着  玩转裹裹  代取的快递，是一箱水果。\n目前这箱水果已经送到榕六了，幸亏这场雨不大。\n我没有资格对 玩转裹裹 的运营进行评判，毕竟是大学生创业嘛~\n但你大爷的素质放哪去了？\n你大爷的业务水平放哪去了？你大爷的开学几天几百几千件快递给你，你大爷的每件3块钱，你他奶奶的都月入快几万了吧？\n你大爷这样对待快递的？\n（情绪暴躁，见谅',2,1,1663689314,'https://cdn.lansu.net.cn/api/202209/202209202354560266057.jpg','','0',1,0,0,133,NULL,NULL,0,NULL,''),(31,12,6,30,'16',0,0,'各位同学，平台使用或者服务问题可以联系以下客服微信，想成为快递代取的骑手也可以联系以下客服微信哦。',2,1,1663809836,'https://cdn.lansu.net.cn/api/202209/202209220922250233776.jpg','','0',0,2,0,192,NULL,NULL,0,NULL,'2'),(32,14,6,1,'457',0,0,'整理了一下我们有楼长的宿舍群哈，很多都是新开的群，然后各位如果是经常用我们平台的可以进群哦，群内可以获取楼长的送件时间，我们也会每日发放红包来抽免费代取，然后如果有任何的代取活动都会优先发在粉丝群，各位可以对号入座哈',2,0,1663856161,'https://cdn.lansu.net.cn/api/202209/202209222215540243381.jpg,https://cdn.lansu.net.cn/api/202209/202209222215540239240.jpg,https://cdn.lansu.net.cn/api/202209/202209222215540243358.jpg','','0',0,0,0,0,NULL,NULL,0,1663856169,''),(33,14,6,31,'457',0,0,'整理了一下我们有楼长的宿舍群哈，很多都是新开的群，然后各位如果是经常用我们平台的可以进群哦，群内可以获取楼长的送件时间，我们也会每日发放红包来抽免费代取，然后如果有任何的代取活动都会优先发在粉丝群，各位可以对号入座哈\n此为竹园+松园',NULL,0,1663856693,'','','0',0,0,0,0,NULL,NULL,0,1663856729,''),(34,14,6,1,'457',0,0,'整理了一下我们有楼长的宿舍群哈，很多都是新开的群，然后各位如果是经常用我们平台的可以进群哦，群内可以获取楼长的送件时间，我们也会每日发放红包来抽免费代取，然后如果有任何的代取活动都会优先发在粉丝群，各位可以对号入座哈\n此为桂园',2,1,1663856725,'https://cdn.lansu.net.cn/api/202209/202209222225200236320.jpg,https://cdn.lansu.net.cn/api/202209/202209222225200233376.jpg,https://cdn.lansu.net.cn/api/202209/202209222225200237649.jpg,https://cdn.lansu.net.cn/api/202209/202209222225200281082.jpg','','0',0,0,0,40,NULL,NULL,0,NULL,''),(35,14,6,1,'457',0,0,'整理了一下我们有楼长的宿舍群哈，很多都是新开的群，然后各位如果是经常用我们平台的可以进群哦，群内可以获取楼长的送件时间，我们也会每日发放红包来抽免费代取，然后如果有任何的代取活动都会优先发在粉丝群，各位可以对号入座哈\n此为竹园+松园',2,1,1663856794,'https://cdn.lansu.net.cn/api/202209/202209222226210289341.jpg,https://cdn.lansu.net.cn/api/202209/202209222226200290226.jpg,https://cdn.lansu.net.cn/api/202209/202209222226200292543.jpg','','0',0,0,0,66,NULL,NULL,0,NULL,''),(36,14,6,31,'457',0,0,'整理了一下我们有楼长的宿舍群哈，很多都是新开的群，然后各位如果是经常用我们平台的可以进群哦，群内可以获取楼长的送件时间，我们也会每日发放红包来抽免费代取，然后如果有任何的代取活动都会优先发在粉丝群，各位可以对号入座哈\n此为梅园',2,1,1663856885,'https://cdn.lansu.net.cn/api/202209/202209222227570225513.jpg,https://cdn.lansu.net.cn/api/202209/202209222227570229327.jpg,https://cdn.lansu.net.cn/api/202209/202209222227570213611.jpg,https://cdn.lansu.net.cn/api/202209/202209222227570229103.jpg','','0',0,0,0,106,NULL,NULL,0,NULL,''),(37,14,6,31,'457',0,0,'此为榕园\n整理了一下我们有楼长的宿舍群哈，很多都是新开的群，然后各位如果是经常用我们平台的可以进群哦，群内可以获取楼长的送件时间，我们也会每日发放红包来抽免费代取，然后如果有任何的代取活动都会优先发在粉丝群，各位可以对号入座哈',2,1,1663856931,'https://cdn.lansu.net.cn/api/202209/202209222228400211182.jpg,https://cdn.lansu.net.cn/api/202209/202209222228400225115.jpg,https://cdn.lansu.net.cn/api/202209/202209222228400209410.jpg,https://cdn.lansu.net.cn/api/202209/202209222228400225663.jpg,https://cdn.lansu.net.cn/api/202209/202209222228400221696.jpg,https://cdn.lansu.net.cn/api/202209/202209222228400234061.jpg,https://cdn.lansu.net.cn/api/202209/202209222228410280027.jpg,https://cdn.lansu.net.cn/api/202209/202209222228420220170.jpg,https://cdn.lansu.net.cn/api/202209/202209222228420212935.jpg','','0',1,0,0,336,NULL,NULL,0,NULL,''),(38,14,6,31,'852',0,0,'囧茶的冰粉????️尝试',0,1,1663857162,'','','0',0,0,0,2,NULL,NULL,0,1663857300,''),(39,14,6,31,'852',0,0,'囧茶冰粉冲！',0,1,1663857343,'','','0',0,0,0,35,NULL,NULL,0,NULL,''),(40,17,6,40,'16',0,0,'在平台快递代取服务过程中有任何问题和建议可以联系客服微信。',2,1,1664084560,'https://cdn.lansu.net.cn/api/202209/202209251341140215630.jpg','','0',0,0,0,146,NULL,NULL,0,NULL,'13'),(41,12,6,33,'2327',0,0,'低价充值流量，用微信扫在公众号充，妙到账',2,0,1664102805,'https://cdn.lansu.net.cn/api/202209/202209251845320233720.jpg','','0',0,0,0,1,NULL,NULL,0,NULL,''),(43,14,6,4,'2382',1,1,'谁拿了我这个快递的请接单',2,2,1664283159,'https://cdn.lansu.net.cn/api/202209/202209272052190276942.jpg,https://cdn.lansu.net.cn/api/202209/202209272052190271756.jpg,https://cdn.lansu.net.cn/api/202209/202209272052190277525.jpg','','0',0,0,0,1,'2022-09-27 20:52:44',1664887964,0,NULL,''),(44,14,6,4,'2228',0,0,'找代取  \n校内快递 小件 一本书  \n送榕9  \n下午两点前送到  \n求求了急！',NULL,0,1664595324,'','','0',0,0,0,0,NULL,NULL,0,1665303066,'1'),(45,14,6,31,'2474',0,0,'珠科附近的有没有德邦快递的取件点\n在哪里取呢？',0,1,1664952365,'','','0',1,0,0,65,NULL,NULL,0,NULL,''),(46,13,6,32,'16',0,0,'云浮华立学院代取福利群，有需要的同学扫码加入，群内福利不定期发放，届时留意群公告。如遇无法加群的联系福利群客服。',2,1,1665288156,'https://cdn.lansu.net.cn/api/202210/202210091200350291953.jpg','','0',0,0,0,644,NULL,NULL,0,NULL,''),(47,13,6,32,'16',0,0,'福利群新一波福利发放完毕，群满200人福利继续哦，要进群的同学可以扫码进来哦',2,1,1665399205,'https://cdn.lansu.net.cn/api/202210/202210101852410247850.jpg,https://cdn.lansu.net.cn/api/202210/202210101853140218498.jpg','','0',0,0,0,2033,NULL,NULL,0,NULL,'10'),(48,12,6,30,'16',0,0,'进群领福利啦，第一波福利已发放，需要领福利的同学扫码进群领取，福利不定期发送，届时留意群公告。',2,1,1665410372,'https://cdn.lansu.net.cn/api/202210/202210102158050276332.jpg,https://cdn.lansu.net.cn/api/202210/202210102158120266991.jpg','','0',0,1,0,332,NULL,NULL,0,NULL,'2'),(49,17,6,40,'16',0,0,'代取福利群第一波福利已发放，还没有加群的同学扫码加群，群满200人福利继续放送。',2,1,1665417561,'https://cdn.lansu.net.cn/api/202210/202210102357390258185.jpg,https://cdn.lansu.net.cn/api/202210/202210102357390264997.jpg','','0',0,0,0,352,NULL,NULL,0,NULL,'13'),(50,14,6,31,'4539',0,0,'全国高端就业安置\n全国公安系统培养文职警察300名，\n1、就业方向:公安网络研究所、地方公安系统、(网警)，\n2、薪资待遇:大专6000-12000，本科8000-15000，交社保。(工资，福利，保险以安置地市局为主要参考对象)\n3.学历要求:\n全日制大专、本科等学历，学历越高越好，22-35周岁，专业不限，计算机专业的优先。\n4、就业分配原则:学员可提前选择安置城市（仅限指定地级市），优先按学员意向分配，100%就业保障。优秀者可提前安排就业。\n5、实习期间每月有补助。网警岗位是面向全国招聘、培训、分配安置。\n6、按户籍所在城市安置，有正式制服和民警编号。公安系统内部可查。\n7、岁数要求:22-35岁，专业不限，3～6个月培训，3-6个月带薪实习。网警属于公安民警，本科生两年后可考公务员，考不上还是属于公安内部正式工。\n更多优质工作具体请加微ailongxiao99',0,2,1666361525,'','','0',0,0,0,0,NULL,NULL,0,NULL,''),(51,14,6,4,'4557',0,0,'怎么找多多买菜的代取呀',0,1,1666423055,'','','0',0,0,0,3,NULL,NULL,0,NULL,''),(52,14,6,0,'4557',0,0,'怎么找多多买菜的代取啊',0,1,1666423082,'','','0',1,0,0,15,NULL,NULL,0,NULL,''),(53,14,6,31,'4539',0,0,'高端就业安置\n全国公安系统培养文职警察300名，\n1、就业方向:公安网络研究所、地方公安系统、(网警)，\n2、薪资待遇:大专6000-12000，本科8000-15000，交社保。(工资，福利，保险以安置地市局为主要参考对象)\n3.学历要求:\n全日制大专、本科等学历，学历越高越好，22-35周岁，专业不限，计算机专业的优先。\n4、就业分配原则:学员可提前选择安置城市（仅限指定地级市），优先按学员意向分配，100%就业保障。优秀者可提前安排就业。\n5、实习期间每月有补助。网警岗位是面向全国招聘、培训、分配安置。\n6、按户籍所在城市安置，有正式制服和民警编号。公安系统内部可查。\n7、岁数要求:22-35岁，专业不限，3～6个月培训，3-6个月带薪实习。网警属于公安民警，本科生两年后可考公务员，考不上还是属于公安内部正式工。\n具体请加微ailongxiao99',0,2,1666534094,'','','0',0,0,0,0,NULL,NULL,0,NULL,'3'),(54,12,6,30,'20',0,0,'同学们，找件，催件的请联系以下客服。',2,1,1666579640,'https://cdn.lansu.net.cn/api/202210/202210241046590291167.jpg','','0',0,0,0,2,NULL,NULL,0,1666596196,'2'),(55,12,6,30,'16',0,0,'同学们，快递取件，找件，催件，请联系如下客服微信哦。',2,1,1666596286,'https://cdn.lansu.net.cn/api/202210/202210241524260290226.jpg','','0',0,1,0,98,NULL,NULL,0,NULL,'2'),(56,12,6,33,'1944',0,0,'夕阳西下几时回',2,1,1666610133,'https://cdn.lansu.net.cn/api/202210/202210241914310282263.jpg','','0',2,2,0,42,NULL,NULL,0,NULL,'12'),(57,12,6,25,'5145',0,0,'王者荣耀高级代练师官方认证，持证上岗，接王者代练、陪玩、巅峰、小国标等业务',2,0,1667275930,'https://cdn.lansu.net.cn/api/202211/202211011211020211429.jpg,https://cdn.lansu.net.cn/api/202211/202211011211110212726.jpg,https://cdn.lansu.net.cn/api/202211/202211011211170270804.jpg','','0',0,0,0,3,NULL,NULL,0,NULL,''),(58,14,6,31,'457',0,0,'小驿为了迎接双11与双12，免费送出大量代取会员哦，成为会员后不单单是价格优惠许多，且每月前四件小件都是1r一件！！目前会员可以免费领取，领取方式添加客服微信即可！！',2,1,1667326621,'https://cdn.lansu.net.cn/api/202211/202211020216570243532.jpg','','0',0,0,0,13,NULL,NULL,0,1667360378,''),(59,14,6,31,'457',1,1,'为了迎接双11双12到来，小驿将会员制移步至小程序内，现在下单规格里面多了会员价格，不是会员的同学不要拍那些规格哦，想要成为会员添加客服微信咨询即可',2,1,1667327290,'https://cdn.lansu.net.cn/api/202211/202211020228080232142.jpg','','0',0,0,0,47,'2022-11-02 02:28:16',1667932096,0,1667360416,''),(60,14,6,0,'2025',0,0,'珠科哪里的水果比较好？',0,1,1667343866,'','','0',1,0,0,13,NULL,NULL,0,NULL,''),(61,14,6,1,'1135',0,0,'…………….',NULL,0,1667345716,'','','0',0,0,0,1,NULL,NULL,0,1667345723,''),(62,14,6,1,'1135',0,0,'……….。z',NULL,0,1667346213,'','','0',0,0,0,1,NULL,NULL,0,1667346224,''),(63,14,6,31,'1135',0,0,'……….。这天气',0,1,1667346237,'','','0',1,0,0,20,NULL,NULL,0,NULL,''),(64,14,6,31,'5212',0,0,'代取服务态度很好，还可以送上楼！辛苦代取小哥了',0,1,1667348407,'','','0',1,0,0,14,NULL,NULL,0,NULL,''),(65,14,6,31,'1783',0,0,'会员',0,1,1667348740,'','','0',1,0,0,17,NULL,NULL,0,NULL,''),(66,14,6,31,'2019',0,0,'想要小驿会员????????????',NULL,0,1667359957,'','','0',0,0,0,3,NULL,NULL,0,1667359994,''),(67,14,6,31,'2019',0,0,'想要小驿会员',0,1,1667360013,'','','0',1,0,0,8,NULL,NULL,0,1667361060,''),(68,14,6,0,'4589',0,0,'来来来点个赞',0,1,1667360292,'','','0',1,2,0,29,NULL,NULL,0,NULL,''),(69,14,6,31,'457',0,0,'为了迎接双11双12到来 小驿将微信的会员制转移至小程序，不是会员的，去小程序发布任意论坛动态，邀请一位同学评论，即可免费获得一个月会员！！！成为会员每月前四件小件代取1r一件，用完后任意规格代取都有优惠！！！',2,1,1667360555,'https://cdn.lansu.net.cn/api/202211/202211021142300240834.jpg','','0',0,0,0,48,NULL,NULL,0,NULL,''),(70,14,6,31,'5215',0,0,'有人知道极兔快递可以放几天嘛！',0,1,1667360585,'','','0',0,0,0,2,NULL,NULL,0,NULL,''),(71,14,6,31,'1562',0,0,'校园通',0,1,1667369402,'','','0',1,0,0,8,NULL,NULL,0,NULL,''),(72,14,6,1,'1733',0,0,'会员',0,1,1667372734,'','','0',0,0,0,5,NULL,NULL,0,NULL,''),(73,14,6,31,'469',0,0,'414',0,1,1667375981,'','','0',0,0,0,4,NULL,NULL,0,NULL,''),(74,14,6,4,'5274',0,0,'会员',0,1,1667376254,'','','0',1,0,0,30,NULL,NULL,0,NULL,''),(75,17,6,40,'3323',0,0,'代拿快递，代打饭拿饭微信➕ljxzuiaityxccccc',NULL,0,1667379281,'','','0',0,0,0,0,NULL,NULL,0,NULL,'13'),(76,14,6,0,'1617',0,0,'dddd',0,1,1667379384,'','','0',0,0,0,7,NULL,NULL,0,NULL,''),(77,14,6,0,'5306',0,0,'来个评论',0,1,1667382178,'','','0',0,0,0,7,NULL,NULL,0,NULL,''),(78,14,6,31,'1914',0,0,'会员',0,1,1667431761,'','','0',0,0,0,0,NULL,NULL,0,NULL,''),(79,14,6,4,'5343',0,0,'dd',0,1,1667442003,'','','0',0,0,0,4,NULL,NULL,0,NULL,''),(80,14,6,31,'5405',0,0,'会员',0,1,1667467324,'','','0',0,0,0,0,NULL,NULL,0,NULL,''),(81,14,6,31,'5405',0,0,'会员',0,1,1667467378,'','','0',0,0,0,2,NULL,NULL,0,NULL,''),(82,14,6,31,'757',0,0,'1111',0,1,1667478481,'','','0',1,0,0,6,NULL,NULL,0,NULL,''),(83,14,6,31,'2518',0,0,'414求评论',0,1,1667549141,'','','0',1,0,0,13,NULL,NULL,0,NULL,''),(84,14,6,31,'5479',0,0,'想成为会员！！',0,1,1667551834,'','','0',2,1,0,45,NULL,NULL,0,NULL,''),(85,14,6,0,'1584',0,0,'会员啊',0,1,1667628304,'','','0',1,1,0,12,NULL,NULL,0,NULL,''),(86,14,6,31,'1898',0,0,'会员',0,1,1667634985,'','','0',1,1,0,27,NULL,NULL,0,NULL,''),(87,14,6,31,'494',0,0,'想要会员！',0,1,1667639567,'','','0',2,0,0,18,NULL,NULL,0,NULL,''),(88,14,6,4,'1953',0,0,'会员会员！！',0,1,1667640103,'','','0',1,0,0,5,NULL,NULL,0,NULL,''),(89,14,6,4,'2403',0,0,'想成为会员',NULL,0,1667641238,'','','0',1,0,0,13,NULL,NULL,0,1667641866,''),(90,14,6,31,'5573',0,0,'6',0,1,1667641563,'','','0',0,0,0,0,NULL,NULL,0,NULL,''),(91,14,6,4,'457',1,1,'还有人在用原价点代取，直接置顶这条帖子！！\n点击本图片保存海报转发只朋友圈集赞18即可成为会员\n或者是不想转朋友圈的10r找客服购买成为会员\n每一位我们的用户都应该是会员才行\n成为会员后代取白菜价！！\n同时！！我们是有上门收件的，无论大小、退货还是什么，只要是寄快递都可以找我们！！',2,1,1667672819,'https://cdn.lansu.net.cn/api/202211/202211060224070246050.jpg','','0',0,0,0,44,'2022-11-06 02:27:07',1668277627,0,NULL,'1');
/*!40000 ALTER TABLE `gc_zh_articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_zh_business`
--

DROP TABLE IF EXISTS `gc_zh_business`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_zh_business` (
  `business_id` int(11) NOT NULL AUTO_INCREMENT,
  `s_id` int(11) DEFAULT NULL COMMENT '学校id',
  `wxapp_id` int(11) DEFAULT NULL COMMENT '平台id',
  `wxadmin_name` int(11) DEFAULT NULL COMMENT '微信管理员昵称',
  `type_id` smallint(6) DEFAULT NULL COMMENT '商家分类',
  `start_time` varchar(250) DEFAULT NULL COMMENT '商家营业开始时间',
  `end_time` varchar(250) DEFAULT NULL COMMENT '商家打烊时间',
  `business_name` varchar(250) DEFAULT NULL COMMENT '商家名称',
  `business_address` varchar(250) DEFAULT NULL COMMENT '商家地址',
  `phone` varchar(250) DEFAULT NULL COMMENT '商家电话',
  `expire_time` int(11) DEFAULT NULL COMMENT '到期时间',
  `business_image` varchar(250) DEFAULT NULL COMMENT '商家图片',
  `status` smallint(6) DEFAULT NULL COMMENT '营业状态',
  `type` smallint(6) DEFAULT NULL COMMENT '商家类型',
  `createtime` int(11) DEFAULT NULL COMMENT '创建时间',
  `is_recommend` tinyint(4) DEFAULT NULL COMMENT '首页推荐',
  `starting_fee` decimal(10,2) DEFAULT NULL COMMENT '起步费',
  `longitude` varchar(250) DEFAULT NULL COMMENT '经度',
  `latitude` varchar(250) DEFAULT NULL COMMENT '纬度',
  `printer` varchar(250) DEFAULT NULL COMMENT '打印机编号(SN)',
  `printer_user` varchar(250) DEFAULT NULL COMMENT '打印机后台注册账号(USER)',
  `printer_ukey` varchar(250) DEFAULT NULL COMMENT '打印机后台账号的UKEY',
  `balance` int(11) DEFAULT '1' COMMENT '金豆余额',
  `virtual_sale` int(11) DEFAULT '0' COMMENT '虚拟销量',
  `service_price` decimal(10,2) DEFAULT '0.00' COMMENT '服务费',
  `box_fee` decimal(10,2) DEFAULT '0.00' COMMENT '餐盒费',
  `delivery_fee` decimal(10,2) DEFAULT NULL COMMENT '配送费',
  `store_money` varchar(64) DEFAULT NULL COMMENT '平台抽成',
  `fx_store_money` varchar(64) DEFAULT NULL COMMENT '分校抽成',
  `method` int(11) DEFAULT '1' COMMENT '接单方式：1为骑手配送，2为自行配送',
  `is_dormitory_store` tinyint(4) DEFAULT '0' COMMENT '是否是宿舍小店',
  `sort` int(11) DEFAULT '0' COMMENT '排序',
  `timeslot` varchar(1000) DEFAULT '00:00-24:00' COMMENT '营业时间段',
  `clientid` varchar(255) DEFAULT NULL COMMENT '易联云打印机应用ID',
  `clientsecret` varchar(255) DEFAULT NULL COMMENT '易联云打印机应用秘钥',
  `machine_code` varchar(255) DEFAULT NULL COMMENT '易联云终端号',
  `msign` varchar(255) DEFAULT NULL COMMENT '易联云终端秘钥',
  `printtype` int(11) DEFAULT NULL COMMENT '打印状态1飞蛾2易联云',
  `deliveryfee` decimal(10,2) DEFAULT NULL COMMENT '商家承担配送费',
  PRIMARY KEY (`business_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_zh_business`
--

LOCK TABLES `gc_zh_business` WRITE;
/*!40000 ALTER TABLE `gc_zh_business` DISABLE KEYS */;
INSERT INTO `gc_zh_business` VALUES (1,14,6,16,1,'8:30','23:00','珠科二手书城','珠海市金湾区珠海科技学院','13232578906',1719731236,'https://cdn.lansu.net.cn/subschool/202206/202206191509490251729.jpg',1,1,1655622597,0,2.00,'22.050139','113.405948','','','',10010,0,0.00,0.00,2.00,'5','0',1,0,0,'00:00-24:00',NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `gc_zh_business` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_zh_business_type`
--

DROP TABLE IF EXISTS `gc_zh_business_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_zh_business_type` (
  `type_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `s_id` int(11) DEFAULT NULL COMMENT '学校id',
  `wxapp_id` int(11) DEFAULT NULL COMMENT '平台id',
  `type_name` varchar(250) DEFAULT NULL COMMENT '分类名称',
  `createtime` int(11) DEFAULT NULL COMMENT '创建时间',
  `type_image` varchar(250) DEFAULT NULL COMMENT '分类图片',
  `sort` int(11) DEFAULT NULL COMMENT '排序',
  PRIMARY KEY (`type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_zh_business_type`
--

LOCK TABLES `gc_zh_business_type` WRITE;
/*!40000 ALTER TABLE `gc_zh_business_type` DISABLE KEYS */;
INSERT INTO `gc_zh_business_type` VALUES (1,14,6,'二手图书',1655622431,'',0),(2,14,6,'秋日饮品',1658064978,'',1);
/*!40000 ALTER TABLE `gc_zh_business_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_zh_commenes`
--

DROP TABLE IF EXISTS `gc_zh_commenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_zh_commenes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `s_id` int(11) DEFAULT NULL COMMENT '学校id',
  `wxapp_id` int(11) DEFAULT NULL COMMENT '平台id',
  `article_id` smallint(6) DEFAULT NULL COMMENT '所属文章',
  `contents` text CHARACTER SET utf8mb4 COMMENT '内容',
  `createtime` int(11) DEFAULT NULL COMMENT '创建时间',
  `p_id` int(11) DEFAULT NULL COMMENT '父级id',
  `u_id` varchar(250) DEFAULT NULL COMMENT '用户id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_zh_commenes`
--

LOCK TABLES `gc_zh_commenes` WRITE;
/*!40000 ALTER TABLE `gc_zh_commenes` DISABLE KEYS */;
INSERT INTO `gc_zh_commenes` VALUES (1,12,6,3,'好文',1654727616,0,'16'),(4,12,6,4,'学习强国',1654729395,0,'20'),(5,12,6,4,'科技强国',1654729743,0,'22'),(6,13,6,5,'好美好美',1654778709,0,'22'),(7,13,6,5,'我去过',1654781444,0,'40'),(8,14,6,2,'好',1654915891,0,'33'),(9,14,6,14,'追加可上楼楼栋榕4、2',1662055547,0,'457'),(11,14,6,13,'直接扫码就可以进去啦',1662195491,0,'16'),(12,12,6,13,'满200人进不去了',1662195645,0,'1081'),(13,14,6,13,'稍等，我看看',1662195661,0,'16'),(14,12,6,13,'超过两百进不去',1662196481,0,'1091'),(15,12,6,13,'超过两百进不去',1662197464,0,'1097'),(16,14,6,13,'稍等',1662197486,0,'16'),(17,12,6,13,'可以加上面的2群啦',1662198455,0,'16'),(18,12,6,13,'扫2群二维码',1662199380,12,'20'),(19,12,6,13,'扫2群二维码',1662199392,14,'20'),(20,12,6,13,'扫2群二维码',1662199405,15,'20'),(21,14,6,14,'追加上楼宿舍竹2',1662221503,0,'457'),(22,14,6,16,'好像已经满200了还想要进群的加我微信：',1662221733,0,'457'),(23,14,6,16,'shiguang8260',1662221748,0,'457'),(24,12,6,13,'满人的进不去可以联系客服微信：lansu_media拉入群或者扫福利2群二维码进群。',1662259291,0,'20'),(26,14,6,14,'松一现在可以代取吗',1662729326,0,'1446'),(27,14,6,14,'可以的',1662780638,26,'457'),(28,14,6,14,'松一能上楼了吗????',1662861645,27,'1446'),(29,14,6,14,'榕五能送上楼吗',1662955117,0,'1531'),(30,14,6,27,'还有什么问题可以直接在下面问，看到马上回复！！',1663004249,0,'349'),(31,13,6,19,'过期了????',1663055084,0,'805'),(32,12,6,19,'稍等，我等会更新下',1663055121,0,'20'),(33,14,6,22,'17',1663112171,0,'1644'),(34,14,6,24,'17到30',1663132804,0,'1678'),(35,14,6,28,'请快点处理我的订单退款。没有拿我那30多斤重的东西也没有回复，你们客服是什么意思',1663219876,0,'1668'),(36,14,6,29,'在南门哦，属于流动快递',1663309056,0,'457'),(37,14,6,14,'楼长一般做什么',1663313585,0,'1798'),(38,14,6,29,'南门优尚旁边的烤鱼',1663407442,0,'1875'),(39,14,6,14,'榕六可以吗现在',1663517253,0,'1977'),(40,12,6,25,'，，，',1663768442,0,'486'),(42,14,6,30,'我们是小驿校园通哦，不要误伤友军哈',1663855530,0,'457'),(43,14,6,27,'请问德邦快递在哪里取？',1664952225,30,'2474'),(44,14,6,37,'过期了',1665900230,0,'4052'),(45,14,6,45,'想知道接代取完后，快递要给人放楼下还是送上门吗',1666328720,0,'4502'),(46,12,6,56,'傻????',1666881572,0,'1883'),(47,12,6,56,'SB',1667271508,46,'1944'),(48,14,6,52,'多多买菜似乎付费就可以代取了',1667325133,0,'457'),(49,14,6,65,'唉',1667348828,0,'1572'),(51,14,6,67,'冲冲冲！',1667360056,0,'494'),(52,14,6,68,'90！90！',1667360419,0,'5231'),(53,14,6,64,'还有小姐姐！',1667366404,0,'5208'),(54,14,6,63,'oo',1667369377,0,'5253'),(55,14,6,71,'来',1667369451,0,'1783'),(56,14,6,74,'冲冲冲！',1667376405,0,'5276'),(57,14,6,60,'????????',1667384041,0,'5310'),(58,14,6,84,'冲冲冲!',1667552832,0,'5483'),(59,14,6,84,'来了来了',1667584732,0,'457'),(60,14,6,85,'好呀',1667628455,0,'1574'),(61,14,6,83,'必须的',1667633707,0,'5378'),(62,14,6,82,'。。',1667636394,0,'5548'),(63,14,6,87,'会员',1667639631,0,'494'),(64,14,6,87,'1111',1667640077,0,'1953'),(65,14,6,88,'会员冲冲冲',1667640122,0,'494'),(66,14,6,89,'支持！',1667641718,0,'5576'),(67,14,6,86,'盖楼',1667716738,0,'5638');
/*!40000 ALTER TABLE `gc_zh_commenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_zh_comment_list`
--

DROP TABLE IF EXISTS `gc_zh_comment_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_zh_comment_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `s_id` int(11) DEFAULT NULL COMMENT '学校id',
  `wxapp_id` int(11) DEFAULT NULL COMMENT '平台id',
  `info_id` smallint(6) DEFAULT NULL COMMENT '所属信息',
  `content` tinytext COMMENT '内容',
  `createtime` int(11) DEFAULT NULL COMMENT '创建时间',
  `u_id` varchar(250) DEFAULT NULL COMMENT '用户id',
  `p_id` varchar(250) DEFAULT NULL COMMENT '父级id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_zh_comment_list`
--

LOCK TABLES `gc_zh_comment_list` WRITE;
/*!40000 ALTER TABLE `gc_zh_comment_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_zh_comment_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_zh_forum_class`
--

DROP TABLE IF EXISTS `gc_zh_forum_class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_zh_forum_class` (
  `class_id` int(11) NOT NULL AUTO_INCREMENT,
  `s_id` int(11) DEFAULT NULL COMMENT '学校id',
  `wxapp_id` int(11) DEFAULT NULL COMMENT '平台id',
  `class_name` varchar(250) DEFAULT NULL COMMENT '分类名称',
  `createtime` int(11) DEFAULT NULL COMMENT '创建时间',
  `sort` int(11) DEFAULT '0' COMMENT '排序',
  `icon` varchar(250) DEFAULT NULL COMMENT '图标',
  `img` varchar(250) DEFAULT NULL COMMENT '图片',
  `is_recommend` tinyint(4) DEFAULT NULL COMMENT '首页推荐',
  `url` varchar(250) DEFAULT NULL COMMENT '跳转链接',
  `is_cate` tinyint(4) DEFAULT NULL COMMENT '是否是分类',
  `is_auth_watch` tinyint(4) DEFAULT '0' COMMENT '是否认证可看',
  PRIMARY KEY (`class_id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_zh_forum_class`
--

LOCK TABLES `gc_zh_forum_class` WRITE;
/*!40000 ALTER TABLE `gc_zh_forum_class` DISABLE KEYS */;
INSERT INTO `gc_zh_forum_class` VALUES (1,14,6,'失物招领',1654090334,0,'https://cdn.lansu.net.cn/subschool/202209/202209030033580213975.png','http://cdn.lansu.net.cn/subschool/202206/202206042212590293062.png',0,'/gc_school/pages/lost/index',1,0),(2,14,6,'跳蚤市场',1654090374,0,'https://cdn.lansu.net.cn/subschool/202209/202209030037180248416.png','http://cdn.lansu.net.cn/subschool/202206/202206042208250292577.png',0,'/gc_school/pages/secondhand/index',1,0),(4,14,6,'代取通知',1654325660,0,'https://cdn.lansu.net.cn/subschool/202209/202209030041270209661.png','',0,'',1,0),(14,12,6,'二手市场',1654642340,0,'http://cdn.lansu.net.cn/subschool/202206/202206080651580261616.png','http://cdn.lansu.net.cn/subschool/202206/202206080652180231605.png',1,'/gc_school/pages/secondhand/index',1,0),(15,12,6,'失物招领',1654642391,0,'http://cdn.lansu.net.cn/subschool/202206/202206080652530291384.png','http://cdn.lansu.net.cn/subschool/202206/202206080653090267557.png',1,'/gc_school/pages/lost/index',1,0),(16,12,6,'读书分享',1654642449,0,'http://cdn.lansu.net.cn/subschool/202206/202206080653590215855.png','http://cdn.lansu.net.cn/subschool/202206/202206080653500218176.png',0,'',0,0),(17,12,6,'表白墙',1654642503,0,'http://cdn.lansu.net.cn/subschool/202206/202206080654590223110.png','',0,'',1,0),(22,12,6,'心灵树洞',1654850136,0,'http://cdn.lansu.net.cn/subschool/202206/202206101635200210297.png','',1,'',1,0),(23,12,6,'吃货联盟',1654850248,0,'http://cdn.lansu.net.cn/subschool/202206/202206101637210260897.png','',1,'',1,0),(24,12,6,'督促减肥',1654850272,0,'http://cdn.lansu.net.cn/subschool/202206/202206101637450276759.png','',1,'',1,0),(25,12,6,'游戏代练',1654850336,0,'http://cdn.lansu.net.cn/subschool/202206/202206101638450295620.png','',0,'',0,0),(30,12,6,'快递代取',1661750485,0,'https://cdn.lansu.net.cn/subschool/202209/202209071013070272966.png','',1,'',1,0),(31,14,6,'论坛发布',1662137016,0,'https://cdn.lansu.net.cn/subschool/202209/202209030042210279481.png','',0,'/gc_school/pages/article/list?class_id=3&amp;class_name=?types=1',1,0),(32,13,6,'代取论坛',1662449027,0,'https://cdn.lansu.net.cn/subschool/202210/202210091113070228350.png','',1,'',1,0),(33,12,6,'大学生活',1662515688,0,'https://cdn.lansu.net.cn/subschool/202209/202209071013440216361.png','',1,'',1,0),(36,17,6,'二手市场',1664083881,0,'https://cdn.lansu.net.cn/subschool/202209/202209251331100279876.png','',1,'/gc_school/pages/secondhand/index',1,0),(37,17,6,'失物招领',1664083904,0,'https://cdn.lansu.net.cn/subschool/202209/202209251331410245854.png','',1,'/gc_school/pages/lost/index',1,0),(38,17,6,'表白墙',1664083954,0,'https://cdn.lansu.net.cn/subschool/202209/202209251332320256047.png','',1,'',1,0),(39,17,6,'心灵树洞',1664083977,0,'https://cdn.lansu.net.cn/subschool/202209/202209251332550295180.png','',1,'',1,0),(40,17,6,'快递代取',1664084365,0,'https://cdn.lansu.net.cn/subschool/202209/202209251339230240347.png','',1,'',1,0),(41,17,6,'吃货联盟',1664084384,0,'https://cdn.lansu.net.cn/subschool/202209/202209251339380256651.png','',1,'',1,0),(42,17,6,'游戏组局',1664084408,0,'https://cdn.lansu.net.cn/subschool/202209/202209251340000204755.png','',1,'',1,0),(43,17,6,'校园运动',1664084453,0,'https://cdn.lansu.net.cn/subschool/202209/202209251340440295369.png','',1,'',1,0),(44,13,6,'寄件论坛',1665286053,0,'https://cdn.lansu.net.cn/subschool/202210/202210091127220239075.png','',1,'',1,0),(45,13,6,'校园兼职',1665286483,0,'https://cdn.lansu.net.cn/subschool/202210/202210091134400284884.png','',1,'',1,0),(46,13,6,'代取福利',1665286516,0,'https://cdn.lansu.net.cn/subschool/202210/202210091135140279320.png','',1,'',1,0);
/*!40000 ALTER TABLE `gc_zh_forum_class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_zh_forum_comment_fav`
--

DROP TABLE IF EXISTS `gc_zh_forum_comment_fav`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_zh_forum_comment_fav` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `wxapp_id` int(11) NOT NULL,
  `s_id` int(11) DEFAULT NULL,
  `c_id` int(11) NOT NULL COMMENT '评论id',
  `uid` int(11) NOT NULL COMMENT '用户id',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '1为点赞，0为取消',
  `addtime` varchar(255) NOT NULL,
  `uptime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='文章评论点赞表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_zh_forum_comment_fav`
--

LOCK TABLES `gc_zh_forum_comment_fav` WRITE;
/*!40000 ALTER TABLE `gc_zh_forum_comment_fav` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_zh_forum_comment_fav` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_zh_give_thumbs_up`
--

DROP TABLE IF EXISTS `gc_zh_give_thumbs_up`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_zh_give_thumbs_up` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `wxapp_id` varchar(250) DEFAULT NULL COMMENT '平台id',
  `s_id` varchar(250) DEFAULT NULL COMMENT '学校id',
  `u_id` varchar(250) DEFAULT NULL COMMENT '用户id',
  `articles_id` varchar(250) DEFAULT NULL COMMENT '文章id',
  `status` varchar(250) DEFAULT NULL COMMENT '状态',
  `createtime` int(11) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_zh_give_thumbs_up`
--

LOCK TABLES `gc_zh_give_thumbs_up` WRITE;
/*!40000 ALTER TABLE `gc_zh_give_thumbs_up` DISABLE KEYS */;
INSERT INTO `gc_zh_give_thumbs_up` VALUES (1,'6','14','20','2','1',1654667434),(2,'6','12','16','3','1',1654727590),(3,'6','12','21','4','1',1654729273),(4,'6','12','23','4','1',1654729611),(5,'6','12','23','3','1',1654729614),(6,'6','12','22','4','1',1654729718),(7,'6','12','22','3','1',1654729722),(8,'6','12','16','4','1',1654731883),(9,'6','12','40','4','1',1654745342),(10,'6','12','40','3','1',1654745349),(11,'6','12','21','3','1',1654760821),(12,'6','13','16','5','1',1654778508),(13,'6','13','22','5','1',1654778701),(14,'6','13','40','5','1',1654781435),(15,'6','13','20','5','1',1654812909),(16,'6','13','21','5','1',1654813993),(17,'6','14','140','2','1',1654829481),(18,'6','12','140','3','1',1654829516),(19,'6','12','140','4','1',1654829519),(20,'6','13','140','5','1',1654829530),(21,'6','14','16','2','1',1654829814),(22,'6','14','284','2','0',1655534282),(23,'6','13','473','5','1',1658940019),(24,'6','12','348','4','1',1661578379),(25,'6','12','348','3','1',1661578384),(26,'6','14','16','14','1',1662098286),(27,'6','12','1213','17','1',1662395170),(28,'6','12','16','25','1',1662516218),(29,'6','12','20','25','1',1662516320),(30,'6','12','21','25','1',1662638096),(31,'6','13','805','19','1',1663055093),(32,'6','12','1615','17','1',1663160572),(33,'6','14','1649','28','0',1663483487),(34,'6','12','1300','25','0',1663558729),(35,'6','12','20','31','1',1663809986),(36,'6','12','2165','31','0',1663904611),(37,'6','13','2733','47','0',1665624722),(38,'6','12','4351','31','0',1666067724),(39,'6','13','4510','46','0',1666340301),(40,'6','12','4346','56','1',1666616726),(41,'6','12','4346','55','1',1666616739),(42,'6','12','4346','48','1',1666616743),(43,'6','12','4346','31','1',1666616750),(44,'6','12','4486','56','1',1666842655),(45,'6','14','5231','68','1',1667360408),(46,'6','14','5208','68','1',1667366385),(47,'6','14','1574','85','1',1667628452),(48,'6','14','5378','84','1',1667633694),(49,'6','14','1898','86','1',1667641568);
/*!40000 ALTER TABLE `gc_zh_give_thumbs_up` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_zh_goods`
--

DROP TABLE IF EXISTS `gc_zh_goods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_zh_goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `s_id` int(11) DEFAULT NULL COMMENT '学校id',
  `wxapp_id` int(11) DEFAULT NULL COMMENT '平台id',
  `goods_type_id` smallint(6) DEFAULT NULL COMMENT '所属分类',
  `business_id` int(11) DEFAULT NULL COMMENT '所属商家',
  `goods_name` varchar(250) DEFAULT NULL COMMENT '商品名称',
  `price` decimal(10,2) DEFAULT NULL COMMENT '商品价格',
  `goods_img` varchar(250) DEFAULT NULL COMMENT '商品图片',
  `status` int(11) DEFAULT '2' COMMENT '状态',
  `createtime` int(11) DEFAULT NULL COMMENT '创建时间',
  `sort` int(11) DEFAULT NULL COMMENT '排序',
  `specs` text COMMENT '规格',
  `attribute` text COMMENT '属性',
  `stock` int(11) DEFAULT '0' COMMENT '库存',
  `quota` int(11) DEFAULT '2' COMMENT '限购数量',
  `specs_list` text COMMENT '规格列表',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_zh_goods`
--

LOCK TABLES `gc_zh_goods` WRITE;
/*!40000 ALTER TABLE `gc_zh_goods` DISABLE KEYS */;
INSERT INTO `gc_zh_goods` VALUES (1,14,6,1,1,'图',1.00,'https://cdn.lansu.net.cn/subschool/202206/202206202154520285998.jpg',0,1655733296,1,NULL,NULL,0,2,NULL);
/*!40000 ALTER TABLE `gc_zh_goods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_zh_goods_type`
--

DROP TABLE IF EXISTS `gc_zh_goods_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_zh_goods_type` (
  `goods_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `s_id` int(11) DEFAULT NULL COMMENT '学校id',
  `wxapp_id` int(11) DEFAULT NULL COMMENT '平台id',
  `business_id` smallint(6) DEFAULT NULL COMMENT '所属商家',
  `goods_type_name` varchar(250) DEFAULT NULL COMMENT '分类名称',
  `createtime` int(11) DEFAULT NULL COMMENT '创建时间',
  `sort` int(11) DEFAULT NULL COMMENT '排序',
  PRIMARY KEY (`goods_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_zh_goods_type`
--

LOCK TABLES `gc_zh_goods_type` WRITE;
/*!40000 ALTER TABLE `gc_zh_goods_type` DISABLE KEYS */;
INSERT INTO `gc_zh_goods_type` VALUES (1,14,6,1,'二手图书',1655733264,0),(2,14,6,1,'日常用品',1656476208,NULL);
/*!40000 ALTER TABLE `gc_zh_goods_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_zh_info`
--

DROP TABLE IF EXISTS `gc_zh_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_zh_info` (
  `info_id` int(11) NOT NULL AUTO_INCREMENT,
  `s_id` int(11) DEFAULT NULL COMMENT '学校id',
  `wxapp_id` int(11) DEFAULT NULL COMMENT '平台id',
  `title` varchar(250) DEFAULT NULL COMMENT '物品名称',
  `address` varchar(250) DEFAULT NULL COMMENT '地点',
  `u_id` varchar(250) DEFAULT NULL COMMENT '用户id',
  `type` smallint(6) DEFAULT NULL COMMENT '所属分类',
  `media_type` smallint(6) DEFAULT NULL COMMENT '媒体类型',
  `createtime` int(11) DEFAULT NULL COMMENT '创建时间',
  `phone` varchar(250) DEFAULT NULL COMMENT '手机号',
  `pick_date` varchar(255) DEFAULT NULL COMMENT '日期',
  `claim_method` varchar(250) DEFAULT NULL COMMENT '认领方式',
  `remarks` tinytext COMMENT '备注',
  `image` varchar(250) DEFAULT NULL COMMENT '图片',
  `video` varchar(250) DEFAULT NULL COMMENT '视频',
  PRIMARY KEY (`info_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_zh_info`
--

LOCK TABLES `gc_zh_info` WRITE;
/*!40000 ALTER TABLE `gc_zh_info` DISABLE KEYS */;
INSERT INTO `gc_zh_info` VALUES (1,14,6,'黑色透明笔袋','二教D511','2502',2,NULL,1666106112,'18718066220','10月18日','打电话或者加我微信吧','在第二排靠近讲台座位的抽屉里，里面有修正带橡皮铅笔黑笔红笔等有偿！','',''),(2,14,6,'寄错快递了，麻烦这个物品的主人联系我们','驿站','457',1,2,1667587917,'18825641807','11.3','直接添加客服微信','这个同学的快递寄错了，麻烦认领一下给你寄回哦','https://cdn.lansu.net.cn/api/202211/202211050250270236371.jpg','');
/*!40000 ALTER TABLE `gc_zh_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gc_zh_vip_order`
--

DROP TABLE IF EXISTS `gc_zh_vip_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gc_zh_vip_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_sn` varchar(255) NOT NULL COMMENT '订单号',
  `money` decimal(10,2) NOT NULL COMMENT '订单金额',
  `number` int(11) DEFAULT '0' COMMENT '金豆数',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '支付状态 0 待支付 1已支付',
  `pay_time` int(11) DEFAULT NULL COMMENT '支付时间',
  `createtime` int(11) NOT NULL COMMENT '创建时间',
  `d_order_sn` varchar(255) DEFAULT NULL COMMENT '第三方订单号',
  `vip_type` int(11) DEFAULT NULL COMMENT '充值会员类型 1 周卡 2月卡',
  `wxapp_id` int(11) NOT NULL COMMENT '平台id',
  `s_id` int(11) NOT NULL COMMENT '学校id',
  `u_id` int(11) NOT NULL COMMENT '用户id',
  `business_id` int(11) NOT NULL COMMENT '商家id',
  `commission` decimal(10,2) DEFAULT '0.00' COMMENT '分校抽佣',
  `pay_type` int(11) DEFAULT '0' COMMENT '0为微信支付，1为翼支付',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gc_zh_vip_order`
--

LOCK TABLES `gc_zh_vip_order` WRITE;
/*!40000 ALTER TABLE `gc_zh_vip_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `gc_zh_vip_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'paotui'
--

--
-- Dumping routines for database 'paotui'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-29 11:09:24
