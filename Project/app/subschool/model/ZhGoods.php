<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_fb91d5116c74124c507d842f00a9ccca($e,$m){

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
