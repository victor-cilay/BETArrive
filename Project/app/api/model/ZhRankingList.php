<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_dd82a4340b86905892c7cb2f55eb07c9($e,$m){

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
