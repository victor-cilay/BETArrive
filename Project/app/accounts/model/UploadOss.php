<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_d34ba2d2eb0e74cd53ebacffd30bfef9($e,$m){

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
