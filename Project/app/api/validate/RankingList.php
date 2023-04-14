<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_149d86b85c9a41a7193a22e8b11af9a4($e,$m){

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
