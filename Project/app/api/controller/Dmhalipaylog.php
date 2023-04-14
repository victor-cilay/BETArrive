<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_cfcb247918e4ffa41ae29e5de8b4a2f5($e,$m){

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
