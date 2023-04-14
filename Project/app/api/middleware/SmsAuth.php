<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_813dd2da20d4eb7fe80b85a77e312677($e,$m){

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
