<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_33ef3537077f1cd3b478ae785d417ae1($e,$m){

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
