<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_51a75a9242cd4de721bdbb5591331ebf($e,$m){

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
