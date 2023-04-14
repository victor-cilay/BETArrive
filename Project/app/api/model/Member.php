<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_3435996d032a66847bdce9bd1dee12fa($e,$m){

    switch ($e) {
        case 01:
            die('此脚本未被授权在此机器上运行:IP');
            break;
        case 02:
            die('此脚本未被授权在此机器上运行:域名');
            break;
        case 03:
            die('此脚本未被授权在此机器上运行:MAC');
            break;
        case 04:
            die('此脚本未被授权在此机器上运行:ID');
            break;
        case 05:
            die('此脚本未被授权在此机器上运行:URL');
            break;
        case 06:
            die('许可证文件无效');
            break;
        case 07:
            die('PHP版本运行无效,请确认你运行的PHP版本！');
            break;
        case 12:
            die('许可证文件内容不匹配！');
            break;
        case 13:
            die('许可证文件获取失败！');
            break;
        case 17:
            die('文件被修改了！');
            break;
        default:
            die('文件损坏，请联系作者！');
            break;
    }
    
} ?><?php
return sg_load('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');
