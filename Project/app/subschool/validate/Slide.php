<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_459a9a8f1bcb20b34d6ae05d603510b3($e,$m){

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
