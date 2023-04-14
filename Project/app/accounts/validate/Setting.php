<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_2bed47a06e363404fbe04e2cb83e6060($e,$m){

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
