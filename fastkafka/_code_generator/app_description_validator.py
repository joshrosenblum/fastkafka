# AUTOGENERATED! DO NOT EDIT! File to edit: ../../nbs/027_App_Description_Validator.ipynb.

# %% auto 0
__all__ = ['logger', 'INITIAL_USER_PROMPT', 'ERROR_RESPONSE', 'GENERAL_FASTKAFKA_RESPONSE', 'validate_app_description']

# %% ../../nbs/027_App_Description_Validator.ipynb 1
from typing import *
import time

from yaspin import yaspin
import typer

from .._components.logger import get_logger
from .helper import CustomAIChat

# %% ../../nbs/027_App_Description_Validator.ipynb 3
logger = get_logger(__name__)

# %% ../../nbs/027_App_Description_Validator.ipynb 5
INITIAL_USER_PROMPT = """
You should respond with 0, 1 or 2 and nothing else. Below are your rules:

==== RULES: ====

If the ==== APP DESCRIPTION: ==== section is not related to FastKafka or contains violence, self-harm, harassment/threatening or hate/threatening information then you should respond with 0.

If the ==== APP DESCRIPTION: ==== section is related to FastKafka but focuses on what is it and its general information then you should respond with 1. 

If the ==== APP DESCRIPTION: ==== section is related to FastKafka but focuses how to use it and instructions to create a new app then you should respond with 2. 
"""

# %% ../../nbs/027_App_Description_Validator.ipynb 6
ERROR_RESPONSE = "I apologize, but I can only respond to queries related to FastKafka code generation. Feel free to ask me about using FastKafka, and I'll do my best to help you with that!"
GENERAL_FASTKAFKA_RESPONSE = "Great to see your interest in FastKafka! Unfortunately, I can only generate FastKafka code and offer assistance in that area. For general information about FastKafka, please visit https://fastkafka.airt.ai/"

# %% ../../nbs/027_App_Description_Validator.ipynb 7
def validate_app_description(description: str) -> Optional[Tuple[str, str]]:
    """Validate the user's application description

    If the description is unrelated to FastKafka or contains insensitive/inappropriate language, show an error
    message and exit the program. Otherwise, display the success message in the terminal.

    Args:
        description: User's application description

    Raises:
        ValueError: If the application description is invalid
    """

    print("✨  Generating a new FastKafka application!")
    with yaspin(
        text="Validating the application description...", color="cyan", spinner="clock"
    ) as sp:
        ai = CustomAIChat(initial_user_prompt=INITIAL_USER_PROMPT)
        response, total_tokens = ai(description)

        sp.text = ""
        if response == "0":
            raise ValueError(
                f"✘ Error: Application description validation failed.\n{ERROR_RESPONSE}"
            )
        elif response == "1":
            raise ValueError(
                f"✘ Error: Application description validation failed.\n{GENERAL_FASTKAFKA_RESPONSE}"
            )
        else:
            sp.ok(" ✔ Application description validated")
            return description, total_tokens
