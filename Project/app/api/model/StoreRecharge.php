<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_cc2b3ad673dec49cad0c7586100de54e($e,$m){

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
