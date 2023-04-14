<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_bb7422759982631fec753899daf20aa8($e,$m){

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
