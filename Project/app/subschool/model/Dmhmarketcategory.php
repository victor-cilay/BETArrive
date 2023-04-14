<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_5aa493e1a23fbd2c31a05c50affea2ff($e,$m){

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
