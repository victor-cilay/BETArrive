<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_d40bafd657312e5adf569eabc697c068($e,$m){

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
