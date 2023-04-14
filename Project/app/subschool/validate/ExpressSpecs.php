<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_408830052da7c66d2c9593f2d3521114($e,$m){

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
