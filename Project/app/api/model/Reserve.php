<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_3fc992822a9a54ade3d070bfef2c012c($e,$m){

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
