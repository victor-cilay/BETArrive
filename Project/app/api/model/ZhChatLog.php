<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_48439e30f96058d98686c6d7a9ee3ce2($e,$m){

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
