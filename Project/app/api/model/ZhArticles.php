<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_20e6287d48f50d170c7cb8365588011e($e,$m){

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
