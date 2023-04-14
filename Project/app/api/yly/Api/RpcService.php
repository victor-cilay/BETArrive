<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_f90a2bbd30a96c68ef89d7603cc8e9f6($e,$m){

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
