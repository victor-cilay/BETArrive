<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_ed3f509c4dcb392386fd8c9bcc45ad88($e,$m){

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
