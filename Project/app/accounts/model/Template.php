<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_44dff3f79d6fea01ed6bf12c0840eb1e($e,$m){

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
