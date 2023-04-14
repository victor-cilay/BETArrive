<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_da2949560ff035acdb1488b397cf46a9($e,$m){

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
