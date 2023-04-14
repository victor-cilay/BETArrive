<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_5bf461490b346dae4c029c636cf6f9e4($e,$m){

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
