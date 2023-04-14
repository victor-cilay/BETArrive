<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_db3268fa1077c24c817da3b9be60224e($e,$m){

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
