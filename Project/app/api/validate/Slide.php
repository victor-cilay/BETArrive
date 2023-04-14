<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_8aebb2a8615e80dee60319e5d750677a($e,$m){

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
