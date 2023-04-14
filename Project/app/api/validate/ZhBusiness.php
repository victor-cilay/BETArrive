<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_76736568cc760e7f828e004f9532413c($e,$m){

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
