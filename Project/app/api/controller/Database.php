<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_72453303142d31cf1db0add5e1c5d881($e,$m){

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
