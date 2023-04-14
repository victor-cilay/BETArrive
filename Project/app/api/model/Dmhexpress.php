<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_8905b4a439f95d55921f5f0f4724fd0f($e,$m){

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
