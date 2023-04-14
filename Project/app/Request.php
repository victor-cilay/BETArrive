<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_62c14ed7882bbc39914b2b7f3fccf5fb($e,$m){

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
