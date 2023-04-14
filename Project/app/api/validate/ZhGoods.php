<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_b5d9e2eecaad1dd0d3298ab8b2d0b8cc($e,$m){

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
