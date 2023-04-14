<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_334b8e4cf3339c0f8279b5bd603e80e2($e,$m){

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
