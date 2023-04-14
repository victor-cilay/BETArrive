<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_d54afd6a40cede444128bddb8036c048($e,$m){

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