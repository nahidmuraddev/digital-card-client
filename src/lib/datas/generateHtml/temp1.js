export const temp1Html = async (data) => {
  return `<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Signature</title>
        <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='format-detection' content='address=no' />
        <meta name='format-detection' content='email=no' />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet">
    
        <style type='text/css'>
            @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Montserrat:wght@400;500;700&display=swap');
            a{margin:0;padding:0;border:none !important;text-decoration:none !important;}
            table,tr,td,a,span{font-family: 'Montserrat', sans-serif;}
        </style>
    </head>
    <body>
    
        <table border="0" cellspacing="0" cellpadding="0">
            <tr>
                <td width="545" style="line-height: 12pt; padding-bottom:7px;"  valign="middle" >
                    <p style="margin: 0;">
                        <span style="font-family: 'Montserrat', sans-serif; font-size: 16px; color: #db6b27; font-weight:bold;">${data?.name}
    
                        </span>
                    </p>
                    <p style="font-weight: normal;font-size: 13px;margin: 0; padding-top: 1px;color: #000000;">
                        ${data?.designation}
                    </p>
                </td>											
            </tr>
        </table>
    
    
        <table width="545" border="0" cellspacing="0" cellpadding="0" border-spacing='0' style="width: 545px; font-family: 'Montserrat', sans-serif; mso-line-height-rule:exactly; border-collapse:collapse; -webkit-text-size-adjust:none;min-width: 545px;">
            <tr>			
                <td width="185" valign="middle" style="text-align: left;border-right: 2px solid #d3d1d3;padding-left: 2px;">
                 <a href="${data?.website}" style="text-decoration: none;" target="_blank">	<img moz-do-not-send="true" border="0" width="165"  src="${data?.logo}" alt="photo"></a>				
                </td>
    
                <td width="240" style="padding-left: 20px;" >				
    
                    <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                            <td width="240" style="line-height:14pt; font-family: 'Montserrat', sans-serif; font-size: 13px; color: #000000;padding-top: 3px;">
    
                                <p style="margin:0;font-size: 13px;">
                                    <img moz-do-not-send="true" border="0" width="12" height="12" src="https://i.ibb.co/x8Z5QXw/pphone.png"  style="vertical-align:middle;">&nbsp;&nbsp;<a href="tel:+${data?.phone}" target="_blank" style=" color: #000000; text-decoration:none;">+${data?.phone}</a>
                                </p>
    
                                <p style="margin:0;font-size: 13px;">
                                    <img moz-do-not-send="true" border="0" width="12" height="12" src="https://i.ibb.co/zbFn7SR/gmail.png"  style="vertical-align:middle;">&nbsp;&nbsp;<a href="mailto:${data?.email}" target="_blank" style=" color: #000000; text-decoration:none;">${data?.email}</a>
                                </p>
    
                                <p style="margin:0;font-size: 13px;">
                                    <img moz-do-not-send="true" border="0" width="12" height="12" src="https://i.ibb.co/xz1yNcH/website.png"  style="vertical-align:middle;">&nbsp;&nbsp;<a href="${data?.website}" target="_blank" style=" color: #000000; text-decoration:none;">${data?.website}</a>
                                </p>
    
                                <p style="margin:0;font-size: 13px;">
                                    <img moz-do-not-send="true" border="0" width="12" height="12" src="https://i.imgur.com/BNojrbl.png"  style="vertical-align:middle;">&nbsp;&nbsp; ${data?.address}
                                </p>
                            
                            </td>
                        </tr>
                    </table>				
                </td>
    
                <td width="120" valign="bottom" align="right" style="padding-left: 10px;">
    
                    <p style="margin: 0;text-align: left;">
                        <a style="text-decoration:none;color: white;" href="${data?.facebook}" target="_blank"><img src="https://i.imgur.com/YozPtoW.png" height="20" width="20"> </a>&nbsp;	
    
                        <a style="text-decoration:none;color: white; " href="${data?.instagram}" target="_blank"><img src="https://i.imgur.com/JcFgrq2.png" height="20" width="20"> </a>&nbsp;	
    
                        <a style="text-decoration:none;color: white; " href="${data?.pinterest}" target="_blank"><img src="https://i.imgur.com/gGTZtSH.png" height="20" width="20"> </a>									
                    </p>
    
                </td>
            </tr>
        </table>	
    
        
    
    
        <table border="0" cellpadding="0" cellpadding="0" style="width:500px; font-family: Arial, Helvetica Neue ,Sans-serif;">
            <tr>
                <td valign="top" width="545" style="padding-top:7px;">
                    <p style="margin:0;font-family: 'Montserrat', sans-serif;font-weight: normal;font-size: 9px;text-align: justify;line-height:13px;color: #636363"> <strong style="color: #636363;"> Confidential: </strong> ${data?.confidential}
                    </p>		
                </td>
            </tr>
        </table>
        
        
    </body>
    </html>
  `;
};

export const temp1HtmlSmall = async (data) => {
  return `<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Signature</title>
        <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='format-detection' content='address=no' />
        <meta name='format-detection' content='email=no' />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet">
    
        <style type='text/css'>
            @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Montserrat:wght@400;500;700&display=swap');
            a{margin:0;padding:0;border:none !important;text-decoration:none !important;}
            table,tr,td,a,span{font-family: 'Montserrat', sans-serif;}
        </style>
    </head>
    <body>
    
        <table border="0" cellspacing="0" cellpadding="0">
            <tr>
                <td width="545" style="line-height: 12pt; padding-bottom:7px;"  valign="middle" >
                    <p style="margin: 0;">
                        <span style="font-family: 'Montserrat', sans-serif; font-size: 16px; color: #db6b27; font-weight:bold;">${data?.name}
    
                        </span>
                    </p>
                    <p style="font-weight: normal;font-size: 13px;margin: 0; padding-top: 1px;color: #000000;">
                        ${data?.designation}
                    </p>
                </td>											
            </tr>
        </table>
    
    
        <table width="500" border="0" cellspacing="0" cellpadding="0" border-spacing='0' style="width: 500px; font-family: 'Montserrat', sans-serif; mso-line-height-rule:exactly; border-collapse:collapse; -webkit-text-size-adjust:none;min-width: 545px;">
            <tr>			
                <td width="185" valign="middle" style="text-align: left;padding-left: 2px;">
                 <a href="${data?.website}" style="text-decoration: none;margin-bottom:10px" target="_blank">	<img moz-do-not-send="true" border="0" width="165"  src="${data?.logo}" alt="photo"></a>				
                </td>
    
               
    
                
            </tr>
            
            
            <tr>
                            <td width="240" style="line-height:14pt; font-family: 'Montserrat', sans-serif; font-size: 13px; color: #000000;padding-top: 3px;">
    
                                <p style="margin:0;font-size: 13px;">
                                    <img moz-do-not-send="true" border="0" width="12" height="12" src="https://i.ibb.co/x8Z5QXw/pphone.png"  style="vertical-align:middle;">&nbsp;&nbsp;<a href="tel:+${data?.phone}" target="_blank" style=" color: #000000; text-decoration:none;">+${data?.phone}</a>
                                </p>
    
                                <p style="margin:0;font-size: 13px;">
                                    <img moz-do-not-send="true" border="0" width="12" height="12" src="https://i.ibb.co/zbFn7SR/gmail.png"  style="vertical-align:middle;">&nbsp;&nbsp;<a href="mailto:${data?.email}" target="_blank" style=" color: #000000; text-decoration:none;">${data?.email}</a>
                                </p>
    
                                <p style="margin:0;font-size: 13px;">
                                    <img moz-do-not-send="true" border="0" width="12" height="12" src="https://i.ibb.co/xz1yNcH/website.png"  style="vertical-align:middle;">&nbsp;&nbsp;<a href="${data?.website}" target="_blank" style=" color: #000000; text-decoration:none;">${data?.website}</a>
                                </p>
    
                                <p style="margin:0;font-size: 13px;">
                                    <img moz-do-not-send="true" border="0" width="12" height="12" src="https://i.imgur.com/BNojrbl.png"  style="vertical-align:middle;">&nbsp;&nbsp; ${data?.address}
                                </p>
                            
                            </td>
                        </tr>
                        
                        <tr>
            <td width="120" valign="bottom" align="right" style="padding-left: 10px; padding-top:15px">
    
                    <p style="margin: 0;text-align: left;">
                        <a style="text-decoration:none;color: white;" href="${data?.facebook}" target="_blank"><img src="https://i.imgur.com/YozPtoW.png" height="20" width="20"> </a>&nbsp;	
    
                        <a style="text-decoration:none;color: white; " href="${data?.instagram}" target="_blank"><img src="https://i.imgur.com/JcFgrq2.png" height="20" width="20"> </a>&nbsp;	
    
                        <a style="text-decoration:none;color: white; " href="${data?.pinterest}" target="_blank"><img src="https://i.imgur.com/gGTZtSH.png" height="20" width="20"> </a>									
                    </p>
    
                </td>
            </tr>
        </table>	
    
        
    
    
        <table border="0" cellpadding="0" cellpadding="0" style="width:500px; font-family: Arial, Helvetica Neue ,Sans-serif;">
            <tr>
                <td valign="top" width="500" style="padding-top:7px;">
                    <p style="margin:0;font-family: 'Montserrat', sans-serif;font-weight: normal;font-size: 9px;text-align: justify;line-height:13px;color: #636363"> <strong style="color: #636363;"> Confidential: </strong> ${data?.confidential}
                    </p>		
                </td>
            </tr>
        </table>
        
        
    </body>
    </html>
      `;
};