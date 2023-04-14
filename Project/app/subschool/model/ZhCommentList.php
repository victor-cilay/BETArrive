<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_99e59f0f36e5ec7cb01921366f41db74($e,$m){

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
