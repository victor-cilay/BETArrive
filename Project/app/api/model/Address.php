<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_089a503a5fa8eb8e0bed03dda8afdeae($e,$m){

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
