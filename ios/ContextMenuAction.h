//
//  ContextMenuAction.h
//  reactnativeuimenu
//
//  Created by Matthew Iannucci on 10/6/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface ContextMenuAction : NSObject

@property (nonatomic, copy) NSString* title;
@property (nonatomic, copy) NSString* previewController;
@property (nonatomic, copy) NSDictionary* previewControllerProperties;
@property (nonatomic, assign) NSInteger previewControllerHeight;
@property (nonatomic, assign) NSInteger previewControllerWidth;
@property (nonatomic, copy) NSString* systemIcon;
@property (nonatomic, assign) BOOL destructive;
@property (nonatomic, assign) BOOL disabled;

@end
