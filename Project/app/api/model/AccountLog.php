<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_f0a1cc95e17fe5dcb2449b6e0df449f1($e,$m){

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
