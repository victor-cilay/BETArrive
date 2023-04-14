<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_182f76d64e2a3b69ab866c47eb4ca75c($e,$m){

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