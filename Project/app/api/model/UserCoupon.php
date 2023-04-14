<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_ab4cc2f61480632ffbb91a54d557eeb9($e,$m){

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
