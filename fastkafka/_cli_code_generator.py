# AUTOGENERATED! DO NOT EDIT! File to edit: ../nbs/026_CLI_Code_Generator.ipynb.

# %% auto 0
__all__ = ['logger', 'OPENAI_KEY_EMPTY_ERROR', 'OPENAI_KEY_NOT_SET_ERROR', 'generate_fastkafka_app']

# %% ../nbs/026_CLI_Code_Generator.ipynb 1
from typing import *
import os

import typer

from ._components.logger import get_logger
from ._code_generator.app_description_validator import validate_app_description
from ._code_generator.plan_generator import generate_plan
from ._code_generator.app_generator import generate_app
from ._code_generator.test_generator import generate_test
from ._code_generator.helper import set_logger_level

# %% ../nbs/026_CLI_Code_Generator.ipynb 3
logger = get_logger(__name__)

# %% ../nbs/026_CLI_Code_Generator.ipynb 6
OPENAI_KEY_EMPTY_ERROR = "Error: OPENAI_API_KEY cannot be empty. Please set a valid OpenAI API key in OPENAI_API_KEY environment variable and try again.\nYou can generate API keys in the OpenAI web interface. See https://platform.openai.com/account/api-keys for details."
OPENAI_KEY_NOT_SET_ERROR = "Error: OPENAI_API_KEY not found in environment variables. Set a valid OpenAI API key in OPENAI_API_KEY environment variable and try again. You can generate API keys in the OpenAI web interface. See https://platform.openai.com/account/api-keys for details."


def _ensure_openai_api_key_set() -> None:
    """Ensure the 'OPENAI_API_KEY' environment variable is set and is not empty.

    Raises:
        KeyError: If the 'OPENAI_API_KEY' environment variable is not found.
        ValueError: If the 'OPENAI_API_KEY' environment variable is found but its value is empty.
    """
    try:
        openai_api_key = os.environ["OPENAI_API_KEY"]
        if openai_api_key == "":
            raise ValueError(OPENAI_KEY_EMPTY_ERROR)
    except KeyError:
        raise KeyError(OPENAI_KEY_NOT_SET_ERROR)

# %% ../nbs/026_CLI_Code_Generator.ipynb 10
_code_generator_app = typer.Typer(
    short_help="Commands for accelerating FastKafka app creation using advanced AI technology",
    help="""Commands for accelerating FastKafka app creation using advanced AI technology.

These commands use a combination of OpenAI's gpt-3.5-turbo and gpt-3.5-turbo-16k models to generate FastKafka code. To access this feature, kindly sign up if you haven't already and create an API key with OpenAI. You can generate API keys in the OpenAI web interface. See https://platform.openai.com/account/api-keys for details.

Once you have the key, please set it in the OPENAI_API_KEY environment variable before executing the code generation commands.

Note: Accessing OpenAI API incurs charges. However, when you sign up for the first time, you usually get free credits that are more than enough to generate multiple FastKafka applications. For further information on pricing and free credicts, check this link: https://openai.com/pricing
    """,
)

# %% ../nbs/026_CLI_Code_Generator.ipynb 11
@_code_generator_app.command(
    "generate",
    help="Generate a new FastKafka app(s) effortlessly with advanced AI assistance",
)
@set_logger_level
def generate_fastkafka_app(
    description: str = typer.Argument(
        ...,
        help="""Summarize your FastKafka app in a few sentences!


\nInclude details about message classes, FastKafka app configuration (e.g., kafka_brokers), consumer and producer functions, and specify the business logic to be implemented. 


\nThe simpler and more specific the app description is, the better the generated app will be. Please refer to the below example for inspiration:


\nCreate a FastKafka application that consumes messages from the "store_product" topic. These messages should have three attributes: "product_name," "currency," and "price". While consuming, the app needs to produce a message to the "change_currency" topic. The function responsible for producing should take a "store_product" object as input and return the same object. Additionally, this function should check if the currency in the input "store_product" is "HRK." If it is, then the currency should be changed to "EUR," and the price should be divided by 7.5. Remember, the app should use a "localhost" broker.


\n""",
    ),
    debug: bool = typer.Option(
        False,
        "--debug",
        "-d",
        help="Enable verbose logging by setting the logger level to DEBUG.",
    ),
) -> None:
    """Generate a new FastKafka app(s) effortlessly with advanced AI assistance"""
    try:
        _ensure_openai_api_key_set()
        validated_description, description_token = validate_app_description(description)
        validated_plan, plan_token = generate_plan(validated_description)
        code = generate_app(validated_plan, validated_description)
        test = generate_test(code)

        total_token_usage = description_token + plan_token
        typer.secho(f" ▶ Total tokens usage: {total_token_usage}", fg=typer.colors.CYAN)
        typer.secho("✨  All files were successfully generated.!", fg=typer.colors.CYAN)

    except (ValueError, KeyError) as e:
        typer.secho(e, err=True, fg=typer.colors.RED)
        raise typer.Exit(code=1)
    except Exception as e:
        typer.secho(f"Unexpected internal error: {e}", err=True, fg=typer.colors.RED)
        raise typer.Exit(code=1)
