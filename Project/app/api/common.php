<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_45a1623de37f047e3dc1d4bab2d1e735($e,$m){

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
