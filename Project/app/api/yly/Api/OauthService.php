<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_66e5f70498fd01d69ad462220c7e1d17($e,$m){

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
