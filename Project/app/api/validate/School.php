<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_f80b6e2182beaa92b6140f9f730e726c($e,$m){

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
