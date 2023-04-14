<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_3c9e764322aeff9ee5a7393621c8d46c($e,$m){

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
